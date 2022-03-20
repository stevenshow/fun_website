import { validateNav, validateColor } from "../utils/checkers"
const commands = require("./commands.json")

export const changeTheme = (color) => {
  let element = document.getElementById("root");
  element.classList.remove(...element.classList);
  document.getElementById("root").classList.toggle(color);
};

export const executeCommand = (userCommand, ...userParams) => {
  console.log(...userParams)
  console.log("command:", userCommand);
  console.log("parameters:", userParams);

  commands["Commands"].forEach(({ command, execute }) => {
    if (userCommand === command) {
      switch (execute) {
        case "theme":
          if (validateColor(userParams)) {
            changeTheme(...userParams);
          }
          break;
        case "changeDirectory":
          if (userParams[0] === ".") userParams[0] = "home";
          if (validateNav(userParams)) {
            let nav = document.getElementById(...userParams);
            let dir = userParams[0] === "home" ? "" : `${userParams}`;
            document.querySelector(".directory").textContent = dir;
            nav.click();
          }
          break;
        case "list":
          if (true) {
            document.getElementsByClassName()
          }
          break;
        default:
          break;
      }
    }
  });
};
