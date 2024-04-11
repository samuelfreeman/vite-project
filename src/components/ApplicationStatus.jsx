import React from "react";

const ApplicationStatus = () => {
  return (
    <div className="flex   justify-start items-center  h-[70vh]">
      <div className="grid ml-52 grid-cols-2 gap-4  ">
        <div className="p-4 text-4xl font-black">My jobs</div>
        <div className="p-4 text-4xl font-black">Application Status</div>
        <div className="p-4">
          <h2 className="text-lg">Web Developer </h2>
          <h3 className="border border-gray-500 w-20 bg-slate-100  rounded-md  text-center">Applied</h3>
        </div>
        <div className="p-4">
          <h1>Pending Review</h1>
        </div>
        <div className="p-4">
          <h2 className="text-lg">Data analyst </h2>
          <h3 className="border border-gray-500 w-20 bg-slate-100  rounded-md  text-center">Applied</h3>
        </div>
        <div className="p-4 text-red-500">Rejected</div>
        <div className="p-4 ">
          <div>
            <h2 className="text-lg">UI Designer </h2>
            <h3 className="border border-gray-500 w-20 bg-slate-100  rounded-md text-center">Applied</h3>
          </div>
        </div>

        <div className="p-4">
          <h1>Pending Review</h1>
        </div>



      </div>
      
    </div>
  );
};

export default ApplicationStatus;
