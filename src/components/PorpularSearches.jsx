import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../api/job/jobFxn";
import { Blocks } from "react-loader-spinner";

const PorpularSearches = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    // Fetch jobs only if they haven't been fetched before
    if (jobs.length === 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, jobs]); // Add jobs to dependency array

  return (
    <div className="mx-4 my-8 ">
      {loading && (
        <div className="flex justify-center items-center h-[20vh] mb-[330px] md:mb-[210px]">
          <Blocks
            height={100}
            width={100}
            color="#020058"
            ariaLabel="blocks-loading"
            visible={true}
          />
        </div>
      )}
      {!loading && (<div className=" flex justify-center w-full my-28 ">

        <div className="w-[700px]">
          <div className="text-left border text-2xl rounded-md p-2 w-[300px]  ">
            <h1>Popular searches</h1>
          </div>
          <div className="grid grid-cols-1 phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4  ">
            {jobs.map((job) => (
              <div key={job.id} className="border rounded-md p-2  sm:p-2 text-sm">
                {job.title}
              </div>
            ))}
          </div>
        </div>
            </div>
      )}
    </div>
  );
};

export default PorpularSearches;
