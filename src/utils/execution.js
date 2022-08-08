import { validateCommand } from './checkers';

export const changeTheme = (setColor, color) => {
  let element = document.getElementById('root');
  element.classList.remove(...element.classList);
  element.classList.toggle(color);
  setColor(color);
};

export const executeCommand = (setColor = () => {}, userCommand, dirRef, ...userParams) => {
  switch (userCommand) {
    case 'color':
      if (validateCommand(userCommand, userParams)) {
        changeTheme(setColor, ...userParams);
      }
      break;
    case 'cd':
      if (userParams[0] === '.') userParams[0] = 'home';
      if (validateCommand(userCommand, userParams)) {
        let nav = document.getElementById(...userParams);
        let dir = userParams[0] === 'home' ? '' : `${userParams}`;
        dirRef.current.textContent = dir;
        // document.querySelector('.directory').textContent = dir;
        nav.click();
      }
      break;
    case 'list':
      if (true) {
        document.getElementsByClassName();
      }
      break;
    case 'linkedin':
      window.open(`https://www.linkedin.com/in/steven-schoebinger/`);
      break;
    case 'github':
      window.open(`https://www.github.com/stevenshow/`);
      break;
    default:
      break;
  }
};
