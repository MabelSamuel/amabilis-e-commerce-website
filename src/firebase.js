// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv4WETB1XzYgmUvJWxKazpnozVliYQaz8",
  authDomain: "amabilis-e-commerce-store.firebaseapp.com",
  projectId: "amabilis-e-commerce-store",
  storageBucket: "amabilis-e-commerce-store.appspot.com",
  messagingSenderId: "210030464642",
  appId: "1:210030464642:web:a104c5d5a9e1cec22f2e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;  // Allow access only if the user is authenticated
//     }
//   }
// }
