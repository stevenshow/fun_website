import "./App.css";
import Home from "./pages/Home.js";
import TopBar from "./components/TopBar"
import Projects from "./pages/Projects"
// import Contact from "./pages/Contact.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function changeTheme() {
  document.getElementById('root').classList.toggle('green');
  document.getElementById('root').classList.toggle('pink');
};

const App = () => {
  return (
   <Router>
      <TopBar themeChange={changeTheme}/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
