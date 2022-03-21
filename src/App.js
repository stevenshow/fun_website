// import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Home from './pages/Home.js'
import TopBar from './components/TopBar'
import Projects from './pages/Projects'
// import Contact from "./pages/Contact.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'

function changeTheme(color) {
  let element = document.getElementById('root')
  element.classList.remove(...element.classList)
  document.getElementById('root').classList.toggle(color)
}

function HelpModal() {
  Modal.setAppElement('#root')
  const [modalIsOpen, setIsOpen] = useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal
      ariaHideApp={false}
      className='help-modal'
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel='Help Modal'
    />
  )
}

const App = () => {
  return (
    <Router>
      <TopBar changeTheme={changeTheme} />
      {/* <HelpModal> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      {/* </HelpModal> */}
    </Router>
  )
}

export default App
