import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api/Test";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   fullname: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(8, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

const Signup = () => {
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const response = await instance.post("/api/user/signup", values);
        if (response.status === 201) {
          localStorage.setItem("user", JSON.stringify(response.data.user));

          toast.success("User signed up successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            onClose: () => navigate("/findsalaries"),
          });
          console.log(response.data);
        }
      } catch (error) {
        console.error(error.response.data.message);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
        });
      }
    },
  });

  return (
    <div className="grid grid-cols-2 h-screen font-sans items-center ">
      <div className="m-12 shadow-3xl h-[90vh] w-full flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow rounded w-96 px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              placeholder="Full Name"
              className="appearance-none mt-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              type="text"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              placeholder="Email Address"
              className="appearance-none mt-3 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="Password"
              className="appearance-none mt-3 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-button w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
      <div className=" h-full w-full flex bg-button pt-12 pb-12 items-center justify-center">
        <div className="w-full bg-button text-white p-8 h-full flex  shadow-3xl    justify-center items-center">
          <div className="h-[500px] flex  flex-col justify-center">
            <h1 className="pb-4 font-black w-full text-center text-4xl">
              Welcome Back!
            </h1>
            <h6 className="pb-24 text-sm text-center">
              To keep connected with us please <br /> login with your personal
              info.
            </h6>
            <div className=" w-full flex justify-center">
              <Link to="/login">
                <button className=" border hover:bg-blue-700 text-white font-bold py-2 px-4 w-44 rounded focus:outline-none focus:shadow-outline">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
