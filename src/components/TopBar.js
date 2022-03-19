import "./TopBar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const commands = require("../utils/commands");

const changeTheme = (color) => {
  let element = document.getElementById("root");
  element.classList.remove(...element.classList);
  document.getElementById("root").classList.toggle(color);
}

const executeCommand = (userCommand, userParameters) => {
  console.log('command:', userCommand)
  console.log('parameters:', ...userParameters)

  commands.forEach(({ command, execute, parameters }) => {
    console.log(command, userCommand)
    console.log(execute !== undefined && userCommand === command)
    if (execute !== undefined && userCommand === command) {
      switch (execute) {
        case "theme":
          changeTheme(...userParameters)
          break;
        case "navigate":
          let nav = document.getElementById(userParameters);
          console.log(nav)
          nav.click();
          break;
        default:
          break;
      }
    }
  });
}

function Command() {
  const [input, setInput] = useState(""); // '' is the initial state value
  let valid;
  let command;

  const clearInput = () => {
    setInput("");
    document.querySelector(".command").classList.remove("red");
  }

  const handle = () => {
    // Going to probably need regex to test for valid command and arg
    console.log(valid)
    if (valid) {

      // execute command
      let parameters = input.split(" ").slice(1);
      executeCommand(command[0], parameters)
      // clear input
      clearInput();
    }
    else {
      // give error message
      setInput(`try typing 'help'`)
      // clear input
      setTimeout(clearInput, 1000)
    }
  };
// setting the state seems to not update as soon as keeping the valid variable does
// figure out either how to keep valid usable in handle() or update state fast
  const checkCommand = () => {
    command = input.split(" ");
    valid = commands[0].includes(command[0]) || command[0] === "";
    if (valid) {
      document.querySelector(".command").classList.add("valid");
      document.querySelector(".command").classList.remove("invalid");
    }

    else {
      document.querySelector(".command").classList.add("invalid");
    }
  }

  return (
    <input
      autoFocus
      className={`command valid`}
      onInput={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handle()}
      onKeyUp={() => checkCommand()}
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
        <Link id="home" className="link" to="/">
          Home
        </Link>
        <Link id="projects" className="link projects-nav" to="/projects">
          Projects
        </Link>
        <Link id="contact" className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
