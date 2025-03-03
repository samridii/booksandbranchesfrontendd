import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css"; // Import the CSS file
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email contains "@"
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Automatically redirect to /user page
    navigate("/user");
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="form-wrapper">
          <h1 className="form-title">Welcome Back!</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />

            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                <FaEye />
              </button>
            </div>

            <div className="password-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">Sign Up</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


