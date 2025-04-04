// src/components/Login.js
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../firebase-config";
// import { auth, googleProvider } from "../firebase-config";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Logged in as:", user.displayName);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Đăng nhập với Google
      </button>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Đăng nhập với Facebook
      </button>
    </div>
  );
};

export default Login;
