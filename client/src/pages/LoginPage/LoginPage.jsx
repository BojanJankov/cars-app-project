import "./LoginPage.css";
import LoginContainer from "../../Components/LoginContainer/LoginContainer";

function LoginPage() {
  return (
    <section className="LoginPage">
      <LoginContainer link="/register" />
    </section>
  );
}

export default LoginPage;
