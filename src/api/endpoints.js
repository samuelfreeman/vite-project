import instance from "./Test";

const getJobs = async () => {
  const response = await instance.get("/api/jobs");

  return response;
};

const getSingleJobs = async (id) => {
  const response = await instance.get(`/api/job/${id}`);
  return response;
};

const deleteUser = async (id) => {
  const response = await instance.delete(`/api/user/${id}`);
  return response;
};

module.exports = {
  getJobs,
  getSingleJobs,
  deleteUser,
};
