import { validateCommand } from "../utils/checkers";

export const changeTheme = (color) => {
  let element = document.getElementById("root");
  element.classList.remove(...element.classList);
  document.getElementById("root").classList.toggle(color);
};

export const executeCommand = (userCommand, ...userParams) => {
  console.log(...userParams);
  console.log("command:", userCommand);
  console.log("parameters:", userParams);
  switch (userCommand) {
    case "color":
      if (validateCommand(userCommand, userParams)) {
        changeTheme(...userParams);
      }
      break;
    case "cd":
      if (userParams[0] === ".") userParams[0] = "home";
      if (validateCommand(userCommand, userParams)) {
        let nav = document.getElementById(...userParams);
        let dir = userParams[0] === "home" ? "" : `${userParams}`;
        document.querySelector(".directory").textContent = dir;
        nav.click();
      }
      break;
    case "list":
      if (true) {
        document.getElementsByClassName();
      }
      break;
    case "linkedin":
      window.open(`https://www.linkedin.com/in/steven-schoebinger/`);
      break;
    case "github":
      window.open(`https://www.github.com/stevenshow/`);
      break;
    // case 'help':
    //   const modal = document.querySelector('.help-modal')
    //   console.log(modal)
    //   modal.showModal()
    //   break;
    default:
      break;
  }
};
