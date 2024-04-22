import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJobs } from "../api/job/jobFxn";
import { Blocks } from "react-loader-spinner";

const Toppaying = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Number of jobs to display per page

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleClick = (jobId) => {
    localStorage.setItem("selectedJobId", jobId);
    navigate("/job");
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    return <div className="w-[700px] h-[30vh]">Error: {error}</div>;
  }

  if (!jobs) {
    return <div className="w-[700px] h-[30vh]">No Jobs found</div>;
  }

  return (
    <div className=" px-7 md:px-20 ">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Browse top paying jobs from industry
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentJobs.map((job) => (
          <button key={job.id} onClick={() => handleClick(job.id)}>
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-blue-900">
                Average Salary ${job.salaryRange.from.toFixed(2)} - $
                {job.salaryRange.to.toFixed(2)} per year
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:my-10">
        <ul className="flex">
          {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`cursor-pointer mx-1 px-3 py-1 border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Toppaying;
