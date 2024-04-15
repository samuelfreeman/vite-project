// we import  the axios instance we created
import instance from "../Test";

// we import the createAsyncThunk from rtk
import { createAsyncThunk } from "@reduxjs/toolkit";

// we  create an async thunk to fetch jobs 
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async () => {
    try {
      const response = await instance.get("/api/job");
      return response.data.jobs;
    } catch (error) {
      console.log(error);
    }
  }
);



