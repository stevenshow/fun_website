import "./App.css";
import Home from "./pages/Home.js";
// import Contact from "./pages/Contact.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* <div className="App"> */}
        <Route exact path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<Contact/>}> */}
        {/* <Home /> */}
      {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
