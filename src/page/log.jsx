import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./log.css";
import { registerUser, logUser  } from "../services/account"

export default function Log() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    telefon: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  //aratam alert
  const showError = (message) => {
    setError(message);

    setTimeout(() => {
      setError(null);
    }, 4500);
  };

  const showSuccess = (message) => {
    setSuccess(message);

    setTimeout(() => {
      setSuccess(null);
    }, 4500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, telefon } = formData;

    const phoneRegex = /^(\+40|0)\d{9}$/;

    if (!phoneRegex.test(telefon)) {
      showError("Introdu un număr de telefon valid. Exemplu: 0712345678 sau +40712345678");
      return;
    }

    try {
      const response = await registerUser(email, password, username, telefon);

       console.log("User registered:", response);

        showSuccess("Contul a fost creat. Mesajul de activare a fost trimis pe email.");

        setTimeout(() => {
          setActive(false);
        }, 1500);
        
    } catch (error) {
      showError(error.response?.data?.message || "Înregistrarea a eșuat. Încearcă din nou.");
    }
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    const {email, password} = formData;

    try {
      const response = await logUser(email, password);

      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
      console.log("User logged in:", response);
      navigate("/main");
      // o sa aratam un mesage
    }catch (error) {
      showError(error.response?.data?.message || "Autentificarea a eșuat. Verifică datele introduse.");
    }
  }


  return (
    <div className="log">
      <div className={`log-container ${active ? "active" : ""}`}>
        {error && (
          <div className="auth-toast">
            <i className="bx bx-error-circle"></i>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-toast success">
            <i className="bx bx-check-circle"></i>
            <span>{success}</span>
          </div>
        )}

        <div className="form-box login">
          <form onSubmit={HandleLogin}>
            <h1>Login</h1>

            <div className="input-box">
              <input type="email" placeholder="Email" required name="email" onChange={handleInputChange}/>
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required name="password" onChange={handleInputChange}/>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="log-btn">Login</button>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" required name="username" onChange={handleInputChange} />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" required name="email" onChange={handleInputChange}/>
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required name="password" onChange={handleInputChange}/>
              <i className="bx bxs-lock-alt"></i>
            </div>

             <div className="input-box">
              <input type="text" placeholder="Telefon" required name="telefon" onChange={handleInputChange}/>
              <i className="bx bxs-phone"></i>
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
