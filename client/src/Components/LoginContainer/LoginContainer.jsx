import "./LoginContainer.css";
import { Link } from "react-router-dom";

// Link od login formata neka stoj za do vecer
// https://www.codewithfaraz.com/content/6/create-a-pure-css-simple-login-page-html-and-css

function LoginContainer(props) {
  return (
    <div class="login-container">
      <h1>Login</h1>
      <form action="" method="POST">
        <div class="txt-field">
          <input type="text" name="text" required />
          <span></span>
          <label>Username or email</label>
        </div>
        <div class="txt-field">
          <input type="password" name="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forget Password?</div>
        <button name="submit" type="Submit">
          Login
        </button>
        <div class="signup_link">
          You don't have account ? <Link to={props.link}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
