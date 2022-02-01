import "./App.css";
import TopBar from "./TopBar";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <TopBar id='top'/>
      <div className="Content">
        <Home />
      </div>
    </div>
  );
};

export default App;
