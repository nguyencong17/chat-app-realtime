// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdMiXm4TW7gYJBBXjAQ22uBn4vKCSrUbw",
  authDomain: "chat-app-realtime-52f69.firebaseapp.com",
  projectId: "chat-app-realtime-52f69",
  storageBucket: "chat-app-realtime-52f69.firebasestorage.app",
  messagingSenderId: "30522254793",
  appId: "1:30522254793:web:036b298c148db8a442f418",
  measurementId: "G-66L62CL92D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };