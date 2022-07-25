import './App.scss';
import Home from './pages/Home.js';
import TopBar from './components/TopBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function changeTheme(color) {
  let element = document.getElementById('root');
  element.classList.remove(...element.classList);
  element.classList.toggle(color);
}

const App = () => {
  return (
    <Router>
      <TopBar changeTheme={changeTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
