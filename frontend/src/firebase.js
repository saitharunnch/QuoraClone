// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAnWAI-7v06JByaZbmrvxHFtRZNNlWVltg",
  authDomain: "quoraclone-9a6e0.firebaseapp.com",
  projectId: "quoraclone-9a6e0",
  storageBucket: "quoraclone-9a6e0.appspot.com",
  messagingSenderId: "766041162875",
  appId: "1:766041162875:web:00371d1f6996683b458ede",
  measurementId: "G-Q8MQ3LKLSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider, app};