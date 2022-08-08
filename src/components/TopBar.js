import './TopBar.scss';
import Command from './Command';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const TopBar = (props) => {
  const [currentDir, setCurrentDir] = useState('');
  const directory = useRef(null);

  useEffect(() => {
    directory.current.textContent = currentDir;
  }, [currentDir]);

  return (
    <div className="header">
      <div className="console">
        <span className="primary-highlight">steven@schoebinger</span>:
        <span className="secondary-highlight">~/</span>$
        <span className="primary-highlight"> echo </span>
        <span className="secondary-highlight">$WELCOME</span>
        <div>
          Welcome to Steven's website! Type '<span className="primary-highlight">help</span>' for
          list of commands.
        </div>
        <span className="primary-highlight">steven@schoebinger</span>:
        <span className="path">
          <span className="secondary-highlight">~/</span>
          <span className="secondary-highlight" ref={directory}></span>$
          <Command dirRef={directory} />
        </span>
      </div>
      <div className="links-right">
        <Link onClick={() => setCurrentDir('')} id="home" className="link" to="/">
          Home
        </Link>
        <Link
          onClick={() => setCurrentDir('projects')}
          id="projects"
          className="link projects-nav"
          to="/projects"
        >
          Projects
        </Link>
        <Link onClick={() => setCurrentDir('api')} id="api" className="link api-nav" to="/api">
          Api
        </Link>
        <Link onClick={() => setCurrentDir('contact')} id="contact" className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
