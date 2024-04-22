import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppliedJobs } from "../api/job/jobFxn";
import { Blocks } from "react-loader-spinner";
const ApplicationStatus = () => {
  const { appliedJobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  useEffect(() => {
    dispatch(getAppliedJobs(user.id));
  }, [dispatch, user.id]);

  if (loading) {
    return (
      <div className="w-full p-8 text-center h-[40vh] display flex justify-center items">
        <Blocks
          height="80"
          width="80"
          color="#020058"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div className="w-full p-8 text-center">Error: {error}</div>;
  }

  // Check if appliedJobs is undefined or null
  if (!appliedJobs) {
    return <div className="w-full p-8 text-center">No applied jobs found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mx-72">
      <h1 className="md:text-4xl font-bold mb-8 sm:text-2xl ">
        My Jobs and Application Status
      </h1>
      {appliedJobs.appliedJobs.map((appliedJob) => (
        <div
          key={appliedJob.id}
          className="w-full flex flex-col sm:flex-row justify-between items-center mb-8"
        >
          <div className="p-4 text-lg">
            <h2 className="text-xl font-semibold">{appliedJob.job.title}</h2>
          </div>
          <div className="p-4">
            <h3
              className={`border ${
                appliedJob.status === "Submitted" ? "bg-gray-200" : "bg-red-200"
              } text-sm px-3 py-2 rounded-md`}
            >
              {appliedJob.status}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatus;
