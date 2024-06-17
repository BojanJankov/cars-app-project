import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";
function Header({ title }) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar />
    </header>
  );
}

export default Header;
