import { useState } from "react";
import "./LoginContainer.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function LoginContainer(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("api/auth/login", {
        email,
        password,
      });

      const user = response.data;

      const accessToken = response.headers["access-token"];

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", user.firstName);

      navigate(-1);
    } catch (error) {
      console.log(error);
      if (error) {
        setPassword("");
        setEmail("");
      }
    }
  };

  let accessToken = localStorage.getItem("accessToken");

  const removeAccessToken = () => {
    accessToken = null;
    localStorage.clear();
    window.location.reload();
  };

  console.log(accessToken);

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
    <div className="login-container">
      <h1>Login</h1>
      <form action="" method="POST">
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
  );
}

export default LoginContainer;
