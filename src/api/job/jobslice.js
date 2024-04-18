//  we then import the createslice functon of rtk
import { createSlice } from "@reduxjs/toolkit";

// we then import the asyncthunk of the fetch jobs
import {
  fetchJobs,
  getSingleJob,
  deleteAccount,
  applyJobs,
  getAppliedJobs,
} from "./jobFxn";

//  the we create a slice of  the jobs and define the initial state
const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getSingleJob.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getSingleJob.fulfilled, (state, action) => {
      state.loading = false;
      state.job = action.payload;
    });
    builder.addCase(getSingleJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAccount.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(deleteAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(applyJobs.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(applyJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.jobs = action.payload;
    });
    builder.addCase(applyJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAppliedJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAppliedJobs.fulfilled, (state, action) => {
      state.appliedJobs = action.payload; // Update appliedJobs instead of jobs
      state.loading = false;
    });
    builder.addCase(getAppliedJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default jobSlice.reducer;
