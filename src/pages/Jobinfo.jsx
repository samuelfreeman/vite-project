import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { getSingleJob, applyJobs } from "../api/job/jobFxn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          // Application successful
          toast.success("Application submitted successfully", {
            onClose: () => navigate("/profile"),
            autoClose: 1000,
          });
        })
        .catch((error) => {
          // Application failed
          let errorMessage =
            "An error occurred while submitting your application";
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

      <div className="h-[75vh] w-screen flex flex-col justify-center items-center text-left">
        <h1 className="w-[600px] mb-5 text-4xl ">Salaries</h1>
        <h5 className=" text-left w-[600px] mb-5">
          Home <span>{job?.title}</span> <span>Salaries</span>
        </h5>
        <h1 className="w-[600px] mb-4 text-3xl">
          {job?.title} salary in Ghana
        </h1>

        <h3 className="w-[600px] mb-9 text-slate-400">
          How much does a {job?.title} salary in Ghana
        </h3>

        <div className="flex w-[593px] h-[234px] items-center bg-slate-100 justify-around">
          <div className="flex flex-col">
            <h1 className="mb-7 -mt-10">Average Base Salary</h1>
            <div className="flex justify-around items-center">
              <h1>${job?.salaryRange.from.toFixed(2)}</h1>
              <button>Per month</button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-around items-center w-[300px] h-[124px] bg-white">
              <div className="text-button">
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
              className="w-[184px] ml-10 h-[30px] bg-button text-white rounded-lg mt-5"
              onClick={handleApply} // Attach onClick event handler to apply button
            >
              Apply now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobinfo;
