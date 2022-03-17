import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="header">
      <p>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="green-highlight"> echo </span>Welcome to{" "}
        <span className="blue-highlight">$NAME\'s</span> website!
        <div>Welcome to Steven's website!</div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="cursor"> _</span>
      </p>
      <div className="links-right">
        {/* <button type="button" className="home-nav">
          Home
        </button>
        <button type="button" className="projects-nav">
          Projects
        </button> */}
        <Link className="link" to="/">Home</Link>
        <Link className="link projects-nav" to="/projects">Projects</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default TopBar;

// <div class="topnav">
//   <a className="home-nav" href="home">
//     Home
//   </a>
//   <a className="projects-nav" href="projects">
//     Projects
//   </a>
//   <a className="contact-nav" href="contact">
//     Contact
//   </a>
//   {/* <a href="about">About</a> */}
// </div>
