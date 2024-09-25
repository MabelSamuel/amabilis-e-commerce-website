import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [ user, setUser ] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user)=>{
            if (user) {
                const userDoc = await getDoc(doc(db, "users", user.uid))
                if (userDoc.exists()) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        username: userDoc.data().username
                    };
                    setUser(userData);
                }
            }else{
                setUser(null)
            }
        });

        return ()=> unsubscribe();
    }, []);

    const login = (userData) => {
        setUser(userData)
    };

    const logout = async() => {
        await auth.signOut();
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{user, login, logout, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);