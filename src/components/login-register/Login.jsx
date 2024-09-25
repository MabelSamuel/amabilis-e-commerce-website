import React, { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidations } from "../../validations/loginValidations";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login, setIsLoggedIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginValidations),
  });

  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    const { username, password, rememberMe } = data;

    try {
      // Query Firestore for user with matching username
    const userQuery = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]; // Get the first document if username matches
      const userData = userDoc.data();
      const email = userData.email;

      // Sign in the user with the retrieved email and password
      await signInWithEmailAndPassword(auth, email, password);

      const user = { uid: userData.uid, email: userData.email, username: userData.username };

      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      login(user);
      setIsLoggedIn(true);

      // Retrieve and save the cart to Firestore
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      await setDoc(doc(db, "carts", user.uid), {
        cartItems: cart,
        updatedAt: new Date(),
      });

      // Load cart from Firestore and store it in localStorage
      const cartDoc = await getDoc(doc(db, 'carts', user.uid));
      if (cartDoc.exists()) {
          const loadedCart = cartDoc.data().cartItems || [];
          localStorage.setItem('cart', JSON.stringify(loadedCart));
      }
        navigate("/checkout");
      } else {
        setError("user not found");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error logging in", error);
    }

    // Clear the form fields
    reset({
      username: "",
      password: "",
      rememberMe: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border h-full w-[70%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4 "
    >
      {error && <p className="bg-red-500">{error}</p>}
      <div className=" mb-8 ">
        <Input
          type={"text"}
          placeholder={"Username"}
          name={"username"}
          register={register}
        />
        {errors.username && (
          <p className=" bg-red-500  ">{errors.username.message}</p>
        )}
      </div>
      <div className=" mb-8 ">
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          register={register}
        />
        {errors.password && (
          <p className=" bg-red-500  ">{errors.password.message}</p>
        )}
      </div>
      <div className=" flex justify-between ">
        <div>
          <input
            type="checkbox"
            name="rememberMe"
            {...register("rememberMe")}
          />
          <span className=" ml-2 text-[0.938rem]">Remember me</span>
        </div>
        <div>
          <Link className=" text-[0.938rem] ">Forgot password?</Link>
        </div>
      </div>

      <Button name={"LOGIN"} />
    </form>
  );
}

export default Login;
