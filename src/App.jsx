import React from "react";
import Home from "./pages/Home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/Login";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Findsalaries from "./pages/Findsalaries";
import Jobinfo from "./pages/Jobinfo";
import Axios from "./pages/Axios";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import ApplicationReview from "./pages/ApplicationReview";
import Disableaccount from "./pages/Disableaccount";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure:false,
});

const App = () => {
  return (
    <AuthProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<AuthOutlet fallbackPath="/login" />}>
            <Route path="/findsalaries" element={<Findsalaries />} />
            <Route path="/job" element={<Jobinfo />} />
            <Route path="/check" element={<Axios />} />
            <Route path="/profile" element={<ApplicationReview />} />
            <Route path="/account" element={<Disableaccount />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
