import React from "react";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-xl font-bold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-200   rounded-lg"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl font-bold">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-200 px-2 py-1 rounded-lg"
                    : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="text-xl font-bold">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-200 px-2 py-1 rounded-lg"
                    : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-10 hidden md:block"
            src="https://i.ibb.co.com/93G8Dm0M/logo.png"
            alt="Logo"
          />
          <h1 className="text-[#6d36e5] font-bold">HERO.IO</h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-200 px-2 py-1 rounded-lg"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-200 px-2 py-1 rounded-lg"
                  : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-200 px-2 py-1 rounded-lg"
                  : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          to="https://github.com/hasanali3597"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#733ce7] to-[#9f62f2] text-white"
        >
          <img
            src="https://i.ibb.co.com/fz675PBP/fi-2111432.png"
            alt="GitHub Icon"
            className="h-5 w-5"
          />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;