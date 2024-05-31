import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import "./LoginContainer.css";
import { Link } from "react-router-dom";
import api from "../api";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginContainer(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logout, accessToken, login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("api/auth/login", {
        email,
        password,
      });

      const accessToken = response.headers["access-token"];
      const refreshToken = response.headers["refresh-token"];

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      login(accessToken);
    } catch (error) {
      console.log(error);
      if (error) {
        setPassword("");
        setEmail("");
        toast.error("Invalid credentials, try again.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };

  const removeAccessToken = () => {
    logout();
    localStorage.clear();
    window.location.reload();
  };

  if (accessToken !== null) {
    return (
      <>
        <div className="logout-container">
          <h1>Logout</h1>
          <h2>Are you sure you want to log out?</h2>
          <p>You can log out here if you want:</p>
          <button className="logout-button" onClick={removeAccessToken}>
            Log out
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <form action="" method="POST" className="loginForm">
          <div className="txt-field">
            <input
              type="text"
              name="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt-field">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forget Password?</div>
          <button name="submit" type="success" onClick={handleLogin}>
            Login
          </button>
          <div className="signup_link">
            You don't have account ? <Link to={props.link}>Sign Up</Link>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default LoginContainer;
