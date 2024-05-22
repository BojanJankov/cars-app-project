import "./RegisterContainer.css";
import { Link } from "react-router-dom";

function RegisterContainer(props) {
  return (
    <div class="register-container">
      <h1>Register</h1>
      <form action="" method="POST">
        <div class="txt-field">
          <input type="text" name="firstName" required />
          <span></span>
          <label>FirstName</label>
        </div>
        <div class="txt-field">
          <input type="text" name="lastName" required />
          <span></span>
          <label>LastName</label>
        </div>
        <div class="txt-field">
          <input type="email" name="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt-field">
          <input type="password" name="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <button name="submit" type="Submit">
          Register
        </button>
        <div class="signup_link">
          You have account ? <Link to={props.link}>Log In</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterContainer;
