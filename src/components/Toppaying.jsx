import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useHistory hook for redirection
import { fetchJobs } from "../api/job/jobFxn";
import { Blocks } from "react-loader-spinner";
const Toppaying = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get history object for redirection
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  console.log(jobs);
  useEffect(() => {
    if (jobs.length == 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, jobs]);

  const handleClick = (jobId) => {
    // Store job ID in localStorage
    localStorage.setItem("selectedJobId", jobId);
    // Redirect to /job page
    navigate("/job");
  };

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
    return <div className=" w-[700px] h-[30vh]">Error: {error}</div>;
  }
  if (!jobs) {
    return <div className="w-[700px] h-[30vh]">No Jobs found</div>;
  }
  return (
    <div className="container mx-auto px-4 w-[900px] ">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Browse top paying jobs from industry
      </h1>
      <div className="grid w-[950px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs?.map((job) => (
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
    </div>
  );
};

export default Toppaying;
