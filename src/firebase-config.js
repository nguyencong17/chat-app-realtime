// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdMiXm4TW7gYJBBXjAQ22uBn4vKCSrUbw",
  authDomain: "chat-app-realtime-52f69.firebaseapp.com",
  projectId: "chat-app-realtime-52f69",
  storageBucket: "chat-app-realtime-52f69.firebasestorage.app",
  messagingSenderId: "30522254793",
  appId: "1:30522254793:web:036b298c148db8a442f418",
  measurementId: "G-66L62CL92D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);