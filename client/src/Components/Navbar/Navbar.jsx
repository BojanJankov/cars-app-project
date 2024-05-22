import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

function Navbar() {
  const { accessToken } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {accessToken !== null ? (
          <li>
            <NavLink to="/login">Log out</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
