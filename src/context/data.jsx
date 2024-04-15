import { createContext } from "react";
import { getJobs, getSingleJobs, deleteUser } from "../api/endpoints";
const jobData = createContext({
  jobs: getJobs(),
});

export default jobData;
