import { isElementType } from "@testing-library/user-event/dist/utils";

const commands = require("./commands")

export const validateNav = (userParam) => {
  let valid = false;
  commands["Commands"].forEach(element => {
    if (element.command === "cd") {
      valid = element.parameters.includes(...userParam)
    }
  });
  return valid;
}

export const validateColor = (userParam) => {
  let valid = false;
  commands["Commands"].forEach(element => {
      if (element.command === "color") {
        valid = element.parameters.includes(...userParam);
      }
  });
  return valid;
}