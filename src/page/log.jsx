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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, telefon } = formData;

    try {
      const response = await registerUser(email, password, username, telefon);

      localStorage.setItem('token', response.accessToken);

      console.log("User registered:", response);
      navigate("/main");
      // Poți să redirecționezi utilizatorul sau să-i arăți un mesaj de succes
    } catch (error) {
      setError('Eroare la înregistrare: ' + error.response.data.message);
    }
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    const {email, password} = formData;

    try {
      const response = await logUser(email, password);

      localStorage.setItem('token', response.accessToken);

      console.log("User logged in:", response);
      navigate("/main");
      // o sa aratam un mesage
    } catch (error){
      setError('Eroare la autentificare: ' + error.response.data.message);
    }
  }


  return (
    <div className="log">
      <div className={`log-container ${active ? "active" : ""}`}>
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
          {error && <div className="error-message">{error}</div>} {/* Mesaj de eroare */}
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
