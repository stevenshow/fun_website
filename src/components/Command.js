import './Command.scss'
import { useState, useEffect } from 'react'
import { executeCommand } from '../utils/execution'
const commands = require('../utils/commands')

// TODO Possibly use this to check for browser compatibility and fallback
// if (typeof favDialog.showModal === "function") {
//   favDialog.showModal();
// } else {
//   alert("The <dialog> API is not supported by this browser");
// }

const Command = () => {
  const [input, setInput] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  let valid
  let command

  useEffect(() => {
    let modal = document.querySelector('.help-modal')
    if (modalOpen) {
      modal.showModal()
    } else {
      modal.close()
    }
  }, [modalOpen])

  const closeModal = () => {
    setModalOpen(false)
  }

  const clearInput = () => {
    setInput('')
    document.querySelector('.currentcommand').classList.remove('invalid')
  }

  const handle = () => {
    // Going to probably need regex to test for valid command and arg
    if (valid) {
      if (command[0] === 'help') {
        setModalOpen(true)
        clearInput()
        return
      }
      // execute command
      let parameters = input.split(' ').slice(1)
      executeCommand(command[0], ...parameters)
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
      document.querySelector('.currentcommand').classList.add('valid')
      document.querySelector('.currentcommand').classList.remove('invalid')
    } else {
      document.querySelector('.currentcommand').classList.add('invalid')
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setModalOpen(false)
    }
  })

  return (
    <span>
      <input
        autoFocus
        className={`currentcommand valid`}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handle()}
        onKeyUp={() => checkCommand()}
        spellCheck='false'
        type='text'
        value={input}
      />
      <dialog className='help-modal'>
        <div className='help-container'>
          <button onClick={closeModal} className='close-modal'>
            &times;
          </button>
          <h1>Welcome to the Help Modal!</h1>
          <h2 className='color'>color &#60;color&#62;</h2>
          <ul className='colors'>
            <li>green</li>
            <li>orange</li>
            <li>lightblue</li>
            <li>pink</li>
            <li>purple</li>
            <li>white</li>
          </ul>
          <h2 className='page'>cd &#60;page&#62;</h2>
          <ul className='pages'>
            <li>
              projects<span> - Navigates to projects page</span>
            </li>
            <li>
              contact<span> - Navigates to contact page</span>
            </li>
            <li>
              home<span> - Naviagtes to Home page.</span>
            </li>
            <li>
              .<span> - Navigates to Home page</span>
            </li>
          </ul>
        </div>
      </dialog>
    </span>
  )
}

export default Command
