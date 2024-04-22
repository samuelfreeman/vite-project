import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../api/job/jobFxn";

const PorpularSearches = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
console.log(jobs)

  useEffect(() => {
    // Fetch jobs only if they haven't been fetched before
    if (jobs.length === 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, jobs]); // Add jobs to dependency array


  if (error) {
    return <div className=" w-[700px] h-[30vh]">Error: {error}</div>;
  }

  return (
    <div className="ml-96 mt-20 w-[700px] h-[30vh] text-center ">
      {loading && <div> Loading...</div>}
      {!loading && (
        <div>
          <div className="text-left border text-2xl  rounded-md">
            <h1 className="">Porpular searches</h1>
          </div>
          <div className=" grid grid-cols-4 grid-flow-row ">
            {jobs.map((job) => (
              <div key={job.id} className="border text-lg  rounded-md">
                {job.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PorpularSearches;
