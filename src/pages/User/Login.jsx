import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
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
          don't have an account?{" "}
          <Link className="link link-primary" to="/register">
            register
          </Link>
        </p>
      </form>
      <br />
      <hr />
      <br />
      <div className="bg-white shadow-sm flex items-center justify-center">
          <div className="bg-slate-400 container mx-auto py-2 px-4 sm:px-6 lg:px-8 text-white rounded-md cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <FaGoogle className=" w-8 h-8" />
              </div>
              <div className="ml-3 font-medium text-white">
                <p className="text-sm sm:text-base">Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-black shadow-sm flex items-center justify-center rounded-md cursor-pointer">
          <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <FaGithub className="text-white w-8 h-8" />
              </div>
              <div className="ml-3 font-medium text-white">
                <p className="text-sm sm:text-base">Sign in with Github</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
