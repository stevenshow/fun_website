import { useState, useEffect } from 'react'
import { changeTheme, executeCommand } from '../utils/execution'
const commands = require('../utils/commands')

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

  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setModalOpen(false)
    }
  });

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
        <button onClick={closeModal} className='close-modal'>x</button>
        Hello
      </dialog>
    </span>
  )
}

export default Command
