import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <Home />
    </div>
  );
};

export default App;
