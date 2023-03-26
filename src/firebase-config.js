// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcTuYcY6xxNS_A8R_r-dOSglS_BAyiAo8",
  authDomain: "blogproject-d5dbb.firebaseapp.com",
  projectId: "blogproject-d5dbb",
  storageBucket: "blogproject-d5dbb.appspot.com",
  messagingSenderId: "897244997778",
  appId: "1:897244997778:web:dd1220930afc2ccf3ede4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
