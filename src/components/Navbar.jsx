import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import user from "../assets/user.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSignup, setShowUp] = useState(true);
  const [showProfile, setProfile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setShowUp(false);
      setProfile(true); // Ensure this is set to true only if a user is found
    }
  }, []);

  const handleClick = () => {
    const user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
      navigate("/signup");
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-around w-full h-20 bg-white border-b-4 md:justify-between md:px-20">
        <div className="flex justify-between items-center">
          <label htmlFor="Job Hub">
            <h1 className="ml-7 text-1xl font-black text-button md:text-2xl">Job Hub</h1>
          </label>
          <ul className="flex ml-6 h-20 items-center md:ml-20">
            <li className="mr-54 pb-6 pt-7 items-center">
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) =>
                  isActive ? "text-sm pb-6 border-b-4 border-button md:text-lg" : "md:text-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="ml-7 pb-7 pt-7 text-center">
              <NavLink
                to="/findsalaries"
                className={({ isActive }) =>
                  isActive ? "pb-5 border-b-4 border-button text-sm md:text-lg" : "text-sm md:text-lg"
                }
              >
                Find Jobs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          {isHomePage && showSignup && (
            <NavLink
              to="/signup"
              className="mr-4 bg-button rounded-md text-xs p-2 h-10 text-white md:hidden md:text-lg" // Updated breakpoint here
            >
              Sign Up
            </NavLink>
          )}
          {showProfile && (
            <button
              onClick={handleClick}
              className="mr-4 bg-button text-white text-xs h-6 w-[75px] rounded-md md:text-lg md:h-8 md:w-24"
            >
              Sign out
            </button>
          )}

          <ul className="flex">
            {showProfile && (
              <div className="flex justify-center">
                <li className="w-5 h-5 mr-3 md:w-5 md:h-5">
                  <img
                    src={user}
                    onClick={togglePopup}
                    alt="User"
                    className="cursor-pointer"
                  />
                </li>
                {isPopupOpen && <Popup userInfo={userData} />}
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
