// import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Home from "./pages/Home.js";
import TopBar from "./components/TopBar";
import Projects from "./pages/Projects";
// import Contact from "./pages/Contact.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function changeGreen() {
  // document.getElementById("root").classList.toggle("green");
  if (document.getElementById("root").classList.contains("pink")) {
    document.getElementById("root").classList.toggle("pink");
  }

  if (document.getElementById("root").classList.contains("lightblue")) {
    document.getElementById("root").classList.toggle("lightblue");
  }
}

function changePink() {
  if (document.getElementById("root").classList.contains("lightblue")) {
    document.getElementById("root").classList.toggle("lightblue");
  }

  document.getElementById("root").classList.toggle("pink");
}

function changeLightBlue() {
  if (document.getElementById("root").classList.contains("pink")) {
    document.getElementById("root").classList.toggle("pink");
  }

  document.getElementById("root").classList.toggle("lightblue");
}

const App = () => {
  return (
    <Router>
      <TopBar
        changeGreen={changeGreen}
        changePink={changePink}
        changeLightBlue={changeLightBlue}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
