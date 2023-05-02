import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <div className="max-w-md mx-auto my-10">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out">Sign In</button>
        <br />
        <p>
          already have an account?{" "}
          <Link className="link link-primary" to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
