import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Student Study App</h1>
        <p className="text-lg mb-8">
          Empower your learning journey with our amazing features!
        </p>
        <Link to="/register">
          <div className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
            Sign Up Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
