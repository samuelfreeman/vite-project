import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-search-yt0t.onrender.com",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    Authorization: "",
  },
});

instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);

const addJobs = async () => {
  try {
    const response = await instance.post("/api/job", {
      salaryRange: {
        from: 500.0,
        to: 1000.0,
      },
      title: "Python Developer",
      jobType: "fullTime",
      description: "Oversee and manage the operations of a website .",
      email: "pythondev@example.com",
      address: "789 Call Center Lane, City",
      noOfPositions: "2",
      company: "Call Center Solutions Ltd",
      experience: "5-8 years",
      industry: "65e26e874fc71c0f26e64aad",
      updatedAt: "2024-03-02T00:17:36.740Z",
      createdAt: "2024-03-02T00:17:36.740Z",
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const getJobs = async () => {
  try {
    const response = await instance.get("/api/job");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateJobs = async () => {
  try {
    const response = await instance.patch(
      `/api/job/${"66134ccdd140f18e5be3f329"}`,
      {
        title: "Redis developer",
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const sendRequests = async () => {
  try {
    const create = await addJobs();

    // await getJobs()
    // await updateJobs()
  } catch (error) {
    console.log(error.message);
  }
};

export default instance;
