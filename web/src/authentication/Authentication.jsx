import { useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

const Authentication = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleGoogleAuth = () => {
    // This would be replaced with your actual Google Auth implementation
    console.log("Google authentication initiated");
    // Typically you would redirect to your backend auth endpoint or use Firebase etc.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 px-4 py-8">
      <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative flex w-full h-full">
          <div 
            className={`absolute inset-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
              showLogin ? "left-0 opacity-100 z-20" : "left-0 opacity-0 z-10"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full px-8 max-w-md">
                <Login onGoogleAuth={handleGoogleAuth} />
                <div className="mt-4 text-center">
                  <span className="text-gray-600">
                    Don't have an account?{" "}
                    <button
                      className="text-gray-600 font-medium focus:outline-none"
                      onClick={() => setShowLogin(false)}
                    >
                      Sign Up
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`absolute inset-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
              !showLogin ? "left-1/2 opacity-100 z-20" : "left-1/2 opacity-0 z-10"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full px-8 max-w-md">
                <Signup onGoogleAuth={handleGoogleAuth} />
                <div className="mt-4 text-center">
                  <span className="text-gray-600">
                    Already have an account?{" "}
                    <button
                      className="text-gray-600 font-medium focus:outline-none"
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute top-0 h-full w-1/2 transition-all duration-700 ease-in-out bg-gradient-to-br from-gray-500 to-purple-600 overflow-hidden ${
              showLogin ? "left-1/2" : "left-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative flex flex-col items-center justify-center h-full text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {showLogin ? "Welcome Back!" : "Join Us Today!"}
              </h2>
              <p className="mb-8">
                {showLogin 
                  ? "Sign in to access your personalized experience."
                  : "Create an account to unlock all features."}
              </p>
              <div className="w-24 h-1 bg-white/50 mb-8"></div>
              <p className="text-sm opacity-80">
                {showLogin
                  ? "Don't have an account yet? Sign up now!"
                  : "Already a member? Sign in instead!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;