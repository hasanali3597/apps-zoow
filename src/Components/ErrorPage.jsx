import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] px-4 text-center">
      <img
        src="https://i.ibb.co.com/B2LpMgM1/error-404.png"
        alt="404 Illustration"
        className="w-64 h-64 mb-6"
      />
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-700">
        Oops, page not found!
      </h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
