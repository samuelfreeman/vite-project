import React from "react";
import Home from "./pages/Home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/Login";

import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./api/store/store"; // Import your Redux store

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Findsalaries from "./pages/Findsalaries";
import Jobinfo from "./pages/Jobinfo";
import Axios from "./pages/Axios";

import ApplicationReview from "./pages/ApplicationReview";
import Disableaccount from "./pages/Disableaccount";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App component with Provider */}
      <Router>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/findsalaries" element={<Findsalaries />} />
            <Route path="/job" element={<Jobinfo />} />
            <Route path="/check" element={<Axios />} />
            <Route path="/profile" element={<ApplicationReview />} />
            <Route path="/account" element={<Disableaccount />} />
          
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
