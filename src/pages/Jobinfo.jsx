import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { getSingleJob, applyJobs } from "../api/job/jobFxn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Blocks } from "react-loader-spinner";

const Jobinfo = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const jobID = localStorage.getItem("selectedJobId");
  const dispatch = useDispatch();
  const { job, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    } else if (jobID) {
      dispatch(getSingleJob(jobID));
    }
  }, [dispatch, navigate, user, jobID]);

  const handleApply = () => {
    if (user && jobID) {
      const userdata = JSON.parse(user);
      dispatch(applyJobs({ jobId: jobID, userId: userdata.id }))
        .unwrap()
        .then((data) => {
          toast.success("Application submitted successfully", {
            onClose: () => navigate("/profile"),
            autoClose: 1000,
          });
        })
        .catch((error) => {
          let errorMessage = "An error occurred while submitting your application";
          if (error && error.message) {
            errorMessage = error.message;
          }
          toast.error(errorMessage);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <Banner heading="Build a career you will love" />

      <div className="px-4 sm:px-8">
        {loading && (
          <div className="flex justify-center items-center">
            <Blocks
              height={80}
              width={80}
              color="#020058"
              ariaLabel="blocks-loading"
              visible={true}
            />
          </div>
        )}
        {!loading && (
          <div className="w-full h-[70vh] text-center flex justify-center items-center">
            <div className="text-left w-full mt-4 md:ml-[400px]">
              <h1 className="text-3xl mb-2">{job?.title} salary in Ghana</h1>
              <h3 className="text-sm text-slate-400 mb-4">
                How much does a {job?.title} salary in Ghana
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center bg-slate-100 p-4 rounded-md w-full sm:w-[600px]">
                <div className="mb-4 sm:mb-0 sm:mr-4">
                  <h1 className="mb-2">Average Base Salary</h1>
                  <div className="flex items-center">
                    <h1>${job?.salaryRange.from.toFixed(2)}</h1>
                    <button className="ml-2">Per month</button>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center bg-white p-4 rounded-md mb-4 sm:w-[300px]">
                    <div className="text-button mr-4">
                      <h1>Low salary</h1>
                      <h1>Average Salary</h1>
                      <h1>High Salary</h1>
                    </div>
                    <div>
                      <h1>${job?.salaryRange.from.toFixed(2)}</h1>
                      <h1>${job?.salaryRange.to.toFixed(2)}</h1>
                      <h1>${job?.salaryRange.to.toFixed(2)}</h1>
                    </div>
                  </div>
                  <button
                    className="w-full sm:w-auto bg-button text-white rounded-lg px-4 py-2"
                    onClick={handleApply}
                  >
                    Apply now
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Jobinfo;
