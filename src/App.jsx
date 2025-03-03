import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import Terms from "./components/public/Terms";
import Home from "./components/public/Home";
import AdminDashboard from "./components/private/AdminDashboard";
import UserDashboard from "./components/private/UserDashboard";
import "./styles/Login.css";
import "./styles/Signup.css";
import "./styles/Home.css";
import "./styles/AdminDashboard.css";
import "./styles/UserDashboard.css";

// Fake authentication function (Replace with actual auth logic)
const isAuthenticated = () => !!localStorage.getItem("token");
const isAdmin = () => localStorage.getItem("role") === "admin";

// Private Route Wrapper
const PrivateRoute = ({ element, redirectTo }) => {
  return isAuthenticated() ? element : <Navigate to={redirectTo} />;
};

// Admin Route Wrapper
const AdminRoute = ({ element, redirectTo }) => {
  return isAuthenticated() && isAdmin() ? element : <Navigate to={redirectTo} />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        

        {/* Redirect based on auth status */}
        <Route
          path="*"
          element={isAuthenticated() ? <Navigate to="/user" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
