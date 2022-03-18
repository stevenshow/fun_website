import "./TopBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Command() {
  const [input, setInput] = useState(""); // '' is the initial state value

  const handle = () => {
    console.log(input);
    // Going to probably need regex to test for valid command and arg
    if (input.toLocaleLowerCase() === "color") {
      console.log('changed color')
    }
    setInput("");
  };

  return (
    <input
      autoFocus
      className="command"
      onInput={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handle()}
      type="text"
      value={input}
    />
  );
}

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
        <span className="blue-highlight">~</span>${/* <Enter /> */}
        <Command />
        {/* <span className="cursor"> _</span> */}
      </div>
      {/* <button onClick={props.themeChange}>Click Me</button> */}
      <div className="dropdown">
        <div className="dropbtn">Colors</div>
        <div className="dropdown-content">
          <button
            className="green-button"
            onClick={() => props.changeTheme("green")}
          >
            Green
          </button>
          <button
            className="pink-button"
            onClick={() => props.changeTheme("pink")}
          >
            Pink
          </button>
          <button
            className="light-blue-button"
            onClick={() => props.changeTheme("lightblue")}
          >
            Blue
          </button>
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
