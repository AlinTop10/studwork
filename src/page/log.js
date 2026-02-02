import React, { useState } from "react";
import "./log.css";

export default function Log() {
  const [active, setActive] = useState(false);

  return (
    <div className="log">
      <div className={`log-container ${active ? "active" : ""}`}>
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="log-btn">Login</button>
          </form>
        </div>

        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="log-btn">Register</button>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              className="btn register-btn"
              onClick={() => setActive(true)}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              className="btn login-btn"
              onClick={() => setActive(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
