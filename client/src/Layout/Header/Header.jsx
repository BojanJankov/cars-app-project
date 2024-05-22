import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";
function Header(props) {
  return (
    <header className="Header">
      <h1>{props.title}</h1>
      <Navbar />
    </header>
  );
}

export default Header;
