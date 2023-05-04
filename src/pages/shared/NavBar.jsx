import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .error((error) => console.log(error));
  };
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink activeClassName="bg-blue-500 text-white" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="bg-blue-500 text-white" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold text-3xl">
          Americana Bistro
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link
            to="/login"
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Login
          </Link>
        ) : (
          <>
            <img
              title={user?.displayName}
              className="w-10 rounded-full"
              src={user?.photoURL}
            />
            <Link
              onClick={handleLogOut}
              className="ms-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
