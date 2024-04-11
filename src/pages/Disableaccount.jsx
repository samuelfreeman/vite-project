import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Disableaccount = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="Delete account " />
      <div className="flex   flex-col items-center  w-screen  h-screen ">
        <div className="w-[600px] h-[30vh] -ml-52 mt-10 bg-white flex flex-col  justify-around">
          <h1 className="text-3xl font-extrabold mb-4">Close Account </h1>

          <h1 className="mb-4 text-lg">
            <span className="text-redder  ">Warning:</span>Closing of your account is irreversible. This
            cannot be undone.
          </h1>
          <h1 className="mb-6 text-lg">Current Password</h1>
          <input className="border border-black  rounded-md  w-96 mb-8" type="text" />
          <button className="mr-48 rounded-md bg-redder h-24 text-white text-lg font-bold w-40 ml-32">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Disableaccount;
