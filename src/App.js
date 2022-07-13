// import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
import Home from "./pages/Home.js";
import TopBar from "./components/TopBar";
import Projects from "./pages/Projects";
// import Contact from "./pages/Contact.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function changeTheme(color) {
  let element = document.getElementById("root");
  element.classList.remove(...element.classList);
  document.getElementById("root").classList.toggle(color);
}

const App = () => {
  return (
    <Router>
      <TopBar changeTheme={changeTheme} />
      {/* <HelpModal> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* </HelpModal> */}
    </Router>
  );
};

export default App;
