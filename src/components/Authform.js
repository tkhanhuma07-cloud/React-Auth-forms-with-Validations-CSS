// src/Authform.js
import React, { useState } from "react";

export default function Authform() {
  const [isLogin, setIsLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error message
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email format";
    }

    // password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // signup only: confirm password
    if (!isLogin) {
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm your password";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateForm()) return;
    alert("Login successful!");
  };

  const handleSignup = () => {
    if (!validateForm()) return;
    alert("Signup successful!");
  };
  return (
    <div className="Container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogIn(true)}
          >
            LogIn
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogIn(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>LogIn Form</h2>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}

              <a href="#">Forgot Password</a>
              <button onClick={handleLogin}>LogIn</button>
              <p>
                Not a Member?{" "}
                <a href="#" onClick={() => setIsLogIn(false)}>
                  SignUp now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp Form</h2>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}

              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              )}

              <button onClick={handleSignup}>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
