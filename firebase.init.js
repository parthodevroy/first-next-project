// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLc5fh84ACQLWNIm51Uz6-MIr1NCvGYGE",
  authDomain: "my-first-next-9f136.firebaseapp.com",
  projectId: "my-first-next-9f136",
  storageBucket: "my-first-next-9f136.firebasestorage.app",
  messagingSenderId: "140707580446",
  appId: "1:140707580446:web:2c8be318932176b88dbc0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);