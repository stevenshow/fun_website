import "./TopBar.css";
import { Link } from "react-router-dom";


{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}


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
        <button onClick={props.themeChange}>Click Me</button>
      <div className="links-right">
        <Link className="link" to="/">Home</Link>
        <Link className="link projects-nav" to="/projects">Projects</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default TopBar;
