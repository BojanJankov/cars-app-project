import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="ErrorPage">
      <div className="error-container">
        <h1>Page Not Found, Error 404!</h1>
        <Link to="/">Return to Home</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
