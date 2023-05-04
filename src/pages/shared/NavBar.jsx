import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { GridLoader } from "react-spinners";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const {loader} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .error((error) => console.log(error));
  };

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
        <a className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold text-2xl lg:text-3xl">
          Americana Bistro
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">
          <li>
            <NavLink
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
                  background: isActive ? "#B2BEB5" : "",
                  padding: isActive ? "5px" : ""
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
        {loader ? (
        <div>
          <GridLoader
            color="#36d7b7"
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      ) : !user ? (
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
              className="ms-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-2 px-2 lg:px-4 border border-red-600 rounded-lg shadow-md transition duration-300 ease-in-out"
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
