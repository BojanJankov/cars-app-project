import { Link } from "react-router-dom";
import "./HomePageButton.css";

function HomePageButton(props) {
  return (
    <Link to={props.linkPath}>
      <button className="HomePageButton">{props.title}</button>
    </Link>
  );
}

export default HomePageButton;
