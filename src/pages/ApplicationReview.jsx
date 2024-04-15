import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ApplicationStatus from "../components/ApplicationStatus";

const ApplicationReview = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Banner heading="Application Review" />
      <ApplicationStatus />
      <h1 className="text-center text-gray-500">
        {" "}
        &copy; 2024 JobHub - Cookies, Privacy and Terms - Your Privacy Choices
      </h1>
    </div>
  );
};

export default ApplicationReview;
