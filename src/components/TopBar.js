import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <div className="header">
      <div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="green-highlight"> echo </span>Welcome to{" "}
        <span className="blue-highlight">$NAME\'s</span> website!
        <div>Welcome to Steven's website!</div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="cursor"> _</span>
      </div>
      {/* <button onClick={props.themeChange}>Click Me</button> */}
      <div className="dropdown">
        <button className="dropbtn">Colors</button>
        <div className="dropdown-content">
          <button className="green-button" onClick={props.changeGreen}>Green</button>
          <button className="pink-button" onClick={props.changePink}>Pink</button>
          <button className="light-blue-button" onClick={props.changeLightBlue}>Blue</button>
        </div>
      </div>
      <div className="links-right">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link projects-nav" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
