import { useState } from "react";
import "./LoginContainer.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginContainer(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:3000/api/auth/login", {
          email,
          password,
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.headers);
        });

      const user = response.data;

      const accessToken = response.headers["access-token"];

      console.log(user);
      console.log(response.headers);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", user.firstName);
    } catch (error) {
      console.log(error);
      if (error) {
        setPassword("");
        setEmail("");
      }
    }

    navigate(-1);
  };

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
