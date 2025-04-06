// src/components/Login.js
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import FacebookIcon from "../../../public/facebook.svg"; // Import Google icon
import GoogleIcon from "../../../public/google.svg"; // Import Google icon
import { auth, googleProvider } from "../../firebase-config"; // Import Firebase authentication and provider
const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedUser = result.user;
      console.log("Logged in as:", loggedUser.displayName);
      setUser(loggedUser); // Lưu người dùng vào state
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null); // Xóa thông tin người dùng khi logout
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Cleanup khi component unmount
  }, []);

  return (
    <div className={`${user ? 'relative top-[16px] left-[16px]' : 'relative z-10 h-screen'}`}>
      <div className={`${user ? '' : 'container mx-auto h-full flex justify-center items-center'}`}>
        <div className="p-8 bg-white/30 rounded-lg shadow-lg w-full max-w-md text-white">
          {user ? (
            <div className="flex items-center justify-between">
              <p>Welcome, {user.displayName}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-white text-[28px] mb-4 text-center">
                Welcome to Chat Ping
              </h2>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={handleGoogleLogin}
                  className="px-4 py-2 border text-white rounded-md flex justify-center gap-2 cursor-pointer"
                >
                  Google
                  <span>
                    <img
                      src={GoogleIcon}
                      alt="Google Icon"
                      className="ml-2"
                      width={"24px"}
                      height={"24px"}
                    />
                  </span>
                </button>
                <button
                  onClick={handleGoogleLogin}
                  className="px-4 py-2 border text-white rounded-md flex justify-center gap-2 cursor-pointer"
                >
                  Facebook
                  <span>
                    <img
                      src={FacebookIcon}
                      alt="Google Icon"
                      className="ml-2"
                      width={"24px"}
                      height={"24px"}
                    />
                  </span>
                </button>
              </div>
              <form class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-white mb-2"
                  >
                    Email Address
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i class="fas fa-envelope text-gray-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      class="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-white mb-2"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i class="fas fa-lock text-gray-400"></i>
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      class="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      required
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <i class="fas fa-eye-slash text-gray-400 hover:text-gray-600 cursor-pointer"></i>
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      for="remember"
                      class="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" class="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  class="w-full bg-primary hover:bg-primary/90 text-white py-2.5 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center"
                >
                  <span>Sign In</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
