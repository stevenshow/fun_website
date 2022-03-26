import './TopBar.scss'
import Command from './Command'
import Prompt from './Prompt'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { changeTheme, executeCommand } from '../utils/execution'
const commands = require('../utils/commands')

const openModal = () => {
  const modal = document.querySelector('.help-modal')
  modal.showModal()
  console.log('open', modal)
}

const closeModal = () => {
  const modal = document.querySelector('.help-modal')
  modal.close()
  console.log('close', modal)
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
        {/* <br></br>
        <span className='test'>test</span> */}
        {/* <Prompt prevCommand="color orange" classes="command valid"/> */}
        <Command />
        {/* <button onClick={openModal} className='show-modal'>
          show
        </button> */}
        {/* <dialog className="help-modal">
          <button className="close-modal">
            x
          </button>
          Hello
        </dialog> */}
      </div>
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
