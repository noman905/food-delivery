import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");  // Navigates to the home page
  };

  const goBack = () => {
    navigate(-1);  // Navigates to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-6">It seems like you're lost. This page doesn't exist.</p>
      <div className="flex space-x-4">
        <button
          onClick={goBack}
          className="bg-[#28daf9] text-white px-6 py-2 rounded-md hover:bg-[#1bc7e1] transition duration-300"
        >
          Go Back
        </button>
        <button
          onClick={goHome}
          className="bg-[#28daf9] text-white px-6 py-2 rounded-md hover:bg-[#1bc7e1] transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

