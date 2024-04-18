// we import  the axios instance we created
import instance from "../Test";

// we import the createAsyncThunk from rtk
import { createAsyncThunk } from "@reduxjs/toolkit";

// we  create an async thunk to fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  try {
    const response = await instance.get("/api/job");
    return response.data.jobs;
  } catch (error) {
    console.log(error);
  }
});

export const applyJobs = createAsyncThunk(
  "jobs/applyJobs",
  async ({ jobId, userId }) => {
    try {
      console.log("logging job id from endpoint ", jobId);
      console.log("logging user id from endpoint ", userId);
      const response = await instance.post("/api/application/bulk", {
        jobIds: [jobId],
        userId: userId,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "user/deleteAccount",
  async () => {
    try {
      const response = await instance.delete(`/api/user/${user.id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleJob = createAsyncThunk("jobs/fetchJob", async (JobId) => {
  try {
    const response = await instance.get(`/api/job/${JobId}`);
    return response.data.job;
  } catch (error) {
    console.log(error);
  }
});

export const getAppliedJobs = createAsyncThunk(
  "user/appliedJobs",
  async (userId) => {
    try {
      const response = await instance.get(`/api/user/${userId}/appliedJobs`);
      
      return response.data.appliedJobs;
    } catch (error) {
      console.log(error);
    }
  }
);
