import './Command.scss';
import { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { changeTheme, executeCommand } from '../utils/execution';
const commands = require('../utils/commands');

const Command = ({ dirRef }) => {
  const [input, setInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState(() => localStorage.getItem('color') ?? 'green');
  const help = useRef(null);
  const currentCommand = useRef(document.getElementById('current-command'));
  let valid;
  let command;

  useEffect(() => {
    setColor(setColor, color);
    changeTheme(setColor, color);
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    let modal = help.current;
    // Prevents website from breaking on mobile.  Need to figure out modal for mobile
    if (typeof modal.showModal === 'function') {
      if (modalOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    } else {
      console.log('Cannot use dialog');
    }
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const clearInput = () => {
    setInput('');
    currentCommand.current.classList.remove('invalid');
  };

  const handleCommand = () => {
    if (valid) {
      if (command[0] === 'help') {
        setModalOpen(true);
        clearInput();
        return;
      }
      // execute command
      let parameters = input.split(' ').slice(1);
      executeCommand(setColor, command[0], dirRef, ...parameters);
      clearInput();
    } else {
      setInput(`try typing 'help'`);
      setTimeout(clearInput, 750);
    }
  };

  const checkCommand = () => {
    command = input.split(' ');
    valid = commands['Valid'].includes(command[0]) || command[0] === '';
    if (valid) {
      currentCommand.current.classList.add('valid');
      currentCommand.current.classList.remove('invalid');
    } else {
      currentCommand.current.classList.add('invalid');
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setModalOpen(false);
    }
  });

  return (
    <span>
      <input
        autoFocus
        className="command-input valid"
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
        onKeyUp={() => checkCommand()}
        ref={currentCommand}
        spellCheck="false"
        type="text"
        value={input}
      />
      <dialog className="help-modal" ref={help}>
        <div className="help-container">
          <h1>
            Welcome to the Help Modal!{' '}
            <div>This modal will show you the commands that can be used in the header terminal</div>
            <div>
              Invalid commands will appear <span className="invalid">red</span>. Once the command is
              recognized it will turn the <span className="valid">color</span> of the chosen theme
            </div>
            <div className="close-message">
              Press{' '}
              {isMobile ? (
                <>
                  -&gt;
                  <button className="close-modal" onClick={closeModal}>
                    HERE
                  </button>
                  &lt;-
                </>
              ) : (
                "the 'esc' key"
              )}{' '}
              to close the help modal when you are ready to give some commands a try
            </div>
          </h1>
          <h2 className="color">
            color &#60;color&#62;
            <div>-This will change the primary color theme of the entire website/pages-</div>
          </h2>
          <ul className="colors">
            <li>blue</li>
            <li>green</li>
            <li>lightblue</li>
            <li>orange</li>
            <li>pink</li>
            <li>purple</li>
            <li>red</li>
            <li>yellow</li>
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
              -This will open a new tab and navigate you to my linkedin/github respectively-
            </div>
          </h2>
        </div>
      </dialog>
    </span>
  );
};

export default Command;
