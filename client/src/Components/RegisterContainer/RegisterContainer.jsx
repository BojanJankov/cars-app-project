import "./RegisterContainer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterContainer(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      if (error) {
        setFirstName("");
        setLastName("");
        setPassword("");
        setEmail("");
        toast.error("Invalid input data, enter valid data!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };
  return (
    <>
      <div className="register-container">
        <h1>Register</h1>
        <form action="" method="POST">
          <div className="txt-field">
            <input
              type="text"
              name="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span></span>
            <label>FirstName</label>
          </div>
          <div className="txt-field">
            <input
              type="text"
              name="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span></span>
            <label>LastName</label>
          </div>
          <div className="txt-field">
            <input
              type="email"
              name="email"
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
          <button name="submit" type="Submit" onClick={handleRegister}>
            Register
          </button>
          <div className="signup_link">
            You have account ? <Link to={props.link}>Log In</Link>
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

export default RegisterContainer;
