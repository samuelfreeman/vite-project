import React from "react";
import { NavLink } from "react-router-dom";

const Popup = ({ userInfo }) => {
  return (
    <div className="absolute z-40 mt-10 mr-72 ">
      <div className="popup w-[270px] bg-slate-50 rounded-lg shadow-lg">
        <div className="popup-content p-4 flex flex-col items-center justify-center">
          <div className="">
            <p>
              {" "}
              <span className="font-bold p-4">Name:</span>{userInfo.fullname}
            </p>
            <p className="flex">
              <span className="font-bold p-4">Email:</span><span className="text-sm mt-4 pr-2">{userInfo.email}</span>
            </p>
            <NavLink to="/profile ">
              <p className="underline p-4">View application status</p>
            </NavLink>
          </div>
          {/* Add more user information fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
