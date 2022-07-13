import "./TopBar.scss";
import Command from "./Command";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TopBar = (props) => {
  const [currentDir, setCurrentDir] = useState("");

  useEffect(() => {
    document.querySelector(".directory").textContent = currentDir;
  }, [currentDir]);

  return (
    <div className="header">
      <div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~/</span>$
        <span className="green-highlight"> echo </span>
        {/* Welcome to{' '} */}
        <span className="blue-highlight">$WELCOME</span>
        <div>
          Welcome to Steven's website! Type '
          <span className="green-highlight">help</span>' for list of commands.
        </div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~/</span>
        <span className="directory blue-highlight"></span>$
        {/* <br></br>
        <span className='test'>test</span> */}
        {/* <Prompt prevCommand="color orange" classes="command valid"/> */}
        <Command />
      </div>
      <div className="links-right">
        <Link
          onClick={() => setCurrentDir("")}
          id="home"
          className="link"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setCurrentDir("projects")}
          id="projects"
          className="link projects-nav"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          onClick={() => setCurrentDir("contact")}
          id="contact"
          className="link"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
