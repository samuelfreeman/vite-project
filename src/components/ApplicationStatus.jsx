import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppliedJobs } from "../api/job/jobFxn";

const ApplicationStatus = () => {
  const { appliedJobs, loading, error } = useSelector((state) => state.jobs);
  console.log(appliedJobs);
  const dispatch = useDispatch();

  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  useEffect(() => {
    dispatch(getAppliedJobs(user.id));
  }, [dispatch, user.id]);

  if (loading) {
    return <div className="w-[700px] p-8 text-center h-[40vh]">Loading...</div>;
  }

  if (error) {
    return <div className=" w-[700px] h-[30vh]">Error: {error}</div>;
  }

  // Check if appliedJobs is undefined or null
  if (!appliedJobs) {
    return (
      <div className="w-[700px] p-8 text-center h-[40vh]">
        No applied jobs found.
      </div>
    );
  }


  return (
    <div className="flex justify-start mt-28 mb-32 items-center ">
      <div className="flex items-center w-screen justify-evenly">
        <div className="p-4 text-4xl font-black">
          <h1>My Jobs</h1>
          {appliedJobs.appliedJobs.map((appliedJob) => (
            <div key={appliedJob.id} className="p-4 ">
              <h2 className="text-2xl mt-10">{appliedJob.job.title}</h2>
            </div>
          ))}
        </div>
        <div className="p-4   text-4xl font-black">
          <h1>Application Status</h1>
          {appliedJobs.appliedJobs.map((appliedJob) => (



            <div key={appliedJob.id} className="p-4 mt-8 text-center">
              <h8
                className={`border border-gray-500 w-20 text-sm  p-3 rounded-md text-center ${
                  appliedJob.status === "Submitted"
                    ? "bg-slate-100"
                    : "text-red-500"
                }`}
              >
                {appliedJob.status}
              </h8>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
