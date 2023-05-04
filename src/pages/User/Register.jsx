import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const { auth, logOut } = useContext(AuthContext);
  console.log(auth);

  const handleCheckBox = (event) => {
    setAccepted(event.target.checked);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = form.username.value;
    const photo = form.photo.value;
    console.log(email, password, photo, username);

    if (password.length < 6) {
      setError("password must be at least 6 char long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: username,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        logOut().then().catch();

        navigate("/login");

        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-md mx-auto my-10">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <p className="mb-4 text-red-500">{error}</p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="username">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
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

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="password">
            Photo Url
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id=""
            name="photo"
          />
        </div>

        <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out">
          Register
        </button>
        <br />
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
