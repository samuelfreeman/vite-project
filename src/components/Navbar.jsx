import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import bell from "../assets/bell.png";
import user from "../assets/user.png";

const Navbar = () => {
 const location = useLocation();

 // Check if the current pathname is the home page
 const isHomePage = location.pathname === "/";

 return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between w-screen h-20 bg-white border-b-4">
        <div className="flex justify-between items-center">
          <label htmlFor="Job Hub">
            <h1 className="ml-10 text-3xl font-black text-button">Job Hub</h1>
          </label>
          <ul className="flex ml-20 h-20 items-center">
            <li className="mr-54 pb-6 pt-7 items-center">
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) =>
                 isActive ? " pb-6 border-b-4 border-button" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="ml-10 pb-7 pt-7 text-center">
              <NavLink
                to="/findsalaries"
                className={({ isActive }) =>
                 isActive ? " pb-6 border-b-4 border-button" : ""
                }
              >
                Find Salaries
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          {isHomePage && (
            <NavLink
              to="/signup"
              className="mr-12 p-2 bg-button rounded-md w-20 h-10 text-white"
            >
              Sign Up
            </NavLink>
          )}
          <ul className="flex">
            <div className="flex">
            <NavLink to="/profile">
              <li className="w-5 h-5 mr-4">
                <img src={bell} alt="Bell" />
              </li>

            </NavLink>
              <li  className="w-5 h-5 mr-10">
                <img src={user} alt="User" />
              </li>
            </div>
         
            <li className="mr-20">
              <a href="">Employees/Post job</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
 );
};

export default Navbar;
