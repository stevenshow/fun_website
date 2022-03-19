import './TopBar.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { changeTheme, executeCommand } from '../utils/execution'
const commands = require('../utils/commands')

function Command() {
  const [input, setInput] = useState('')
  let valid
  let command

  const clearInput = () => {
    setInput('')
    document.querySelector('.command').classList.remove('invalid')
  }

  const handle = () => {
    // Going to probably need regex to test for valid command and arg
    if (valid) {
      // execute command
      let parameters = input.split(' ').slice(1)
      executeCommand(command[0], ...parameters)
      // clear input
      clearInput()
    } else {
      // give error message
      console.log(valid)
      setInput(`try typing 'help'`)
      // clear input
      setTimeout(clearInput, 1000)
    }
  }

  const checkCommand = () => {
    command = input.split(' ')
    valid = commands['Valid'].includes(command[0]) || command[0] === ''
    if (valid) {
      document.querySelector('.command').classList.add('valid')
      document.querySelector('.command').classList.remove('invalid')
    } else {
      document.querySelector('.command').classList.add('invalid')
    }
  }

  return (
    <input
      autoFocus
      className={`command valid`}
      onInput={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handle()}
      onKeyUp={() => checkCommand()}
      type='text'
      value={input}
    />
  )
}

const TopBar = (props) => {
  return (
    <div className='header'>
      <div>
        <span className='green-highlight'>steven@schoebinger</span>:
        <span className='blue-highlight'>~/</span>$
        <span className='green-highlight'> echo </span>Welcome to{' '}
        <span className='blue-highlight'>$NAME\'s</span> website!
        <div>Welcome to Steven's website!</div>
        <span className='green-highlight'>steven@schoebinger</span>:
        <span className='blue-highlight'>~/</span>
        <span className='directory blue-highlight'></span>$
        <Command />
      </div>
      {/* <div className="dropdown">
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
      </div> */}
      <div className='links-right'>
        <Link id='home' className='link' to='/'>
          Home
        </Link>
        <Link id='projects' className='link projects-nav' to='/projects'>
          Projects
        </Link>
        <Link id='contact' className='link' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default TopBar
