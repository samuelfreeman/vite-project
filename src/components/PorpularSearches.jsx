import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../api/job/jobFxn";
const PorpularSearches = () => {
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) {
    return <div className="w-[700px] p-8 text-center h-[40vh]">Loading...</div>;
  }
  if (error) {
    return <div className=" w-[700px] h-[30vh]">Error: {error}</div>;
  }

  return (
    <div className="ml-96 mt-20 w-[700px] h-[30vh] text-center ">
      {loading && <div> Loading...</div>}
      {!loading && (
        <div>
          <div className="text-left p-2 border  rounded-md">
            <h1 className="">Porpular searches </h1>
          </div>
          <div className=" grid grid-cols-4 grid-flow-rowgap-3">
            {jobs.map((job) => (
              <div key={job.id} className="border rounded-md">
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
