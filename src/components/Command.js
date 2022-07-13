import "./Command.scss";
import { useState, useEffect } from "react";
import { executeCommand } from "../utils/execution";
const commands = require("../utils/commands");

// TODO Possibly use this to check for browser compatibility and fallback
// if (typeof favDialog.showModal === "function") {
//   favDialog.showModal();
// } else {
//   alert("The <dialog> API is not supported by this browser");
// }

const Command = () => {
  const [input, setInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  let valid;
  let command;

  useEffect(() => {
    let modal = document.querySelector(".help-modal");
    // Prevents website from breaking on mobile.  Need to figure out modal for mobile
    if (typeof modal.showModal === "function") {
      if (modalOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    } else {
      console.log("Cannot use dialog");
    }
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const clearInput = () => {
    setInput("");
    document.querySelector(".currentcommand").classList.remove("invalid");
  };

  const handle = () => {
    // Going to probably need regex to test for valid command and arg
    if (valid) {
      if (command[0] === "help") {
        setModalOpen(true);
        clearInput();
        return;
      }
      // execute command
      let parameters = input.split(" ").slice(1);
      executeCommand(command[0], ...parameters);
      clearInput();
    } else {
      // give error message
      console.log(valid);
      setInput(`try typing 'help'`);
      // clear input
      setTimeout(clearInput, 1000);
    }
  };

  const checkCommand = () => {
    command = input.split(" ");
    valid = commands["Valid"].includes(command[0]) || command[0] === "";
    if (valid) {
      document.querySelector(".currentcommand").classList.add("valid");
      document.querySelector(".currentcommand").classList.remove("invalid");
    } else {
      document.querySelector(".currentcommand").classList.add("invalid");
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setModalOpen(false);
    }
  });

  return (
    <span>
      <input
        autoFocus
        className={`currentcommand valid`}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handle()}
        onKeyUp={() => checkCommand()}
        spellCheck="false"
        type="text"
        value={input}
      />
      <dialog className="help-modal">
        <div className="help-container">
          {/* <button onClick={closeModal} className="close-modal">
            &times;
          </button> */}
          <h1>
            Welcome to the Help Modal!
            <div>
              This modal will show you the commands that can be used in the
              header terminal
            </div>
            <div>
              Invalid commands will appear <span className="invalid">red</span>.
              Once the command is recognized it will turn the{" "}
              <span className="valid">color</span> of the chosen theme
            </div>
            <div>
              Press the 'esc' key to close the help modal when you are ready to
              give some commands a try
            </div>
          </h1>
          <h2 className="color">
            color &#60;color&#62;
            <div>
              -This will change the primary color theme of the entire
              website/pages-
            </div>
          </h2>
          <ul className="colors">
            <li>green</li>
            <li>orange</li>
            <li>lightblue</li>
            <li>pink</li>
            <li>purple</li>
            <li>white</li>
          </ul>
          <h2 className="page">
            cd &#60;page&#62;
            <div>
              -[c]hange [d]irectory will navigate to the given page-
              <div>(home and '.' both take you to the homepage)</div>
            </div>
          </h2>
          <ul className="pages">
            <li>projects</li>
            <li>contact</li>
            <li>home</li>
            <li>.</li>
          </ul>
          <h2 className="linkedin">linkedin</h2>
          <h2 className="github">
            github
            <div>
              -This will open a new tab and navigate you to my linkedin/github
              respectively-
            </div>
          </h2>
        </div>
      </dialog>
    </span>
  );
};

export default Command;
