import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="Content">
        <Home />
      </div>
    </div>
  );
};

export default App;
