import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";

const WelcomePage: React.FC = () => {
  return (
    <>
      <NavBar /> 
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore movies and manage data effortlessly.
        </p>
        <Link to="/view-data">
          <button className="bg-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Go to View Data
          </button>
        </Link>
      </div>
    </>
  );
};

export default WelcomePage;
