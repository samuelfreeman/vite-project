//  we import the create store here to store the reducers
import { configureStore } from "@reduxjs/toolkit";

// we import the slice here
import jobReducer from "../job/jobslice";
// we configure store
const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
