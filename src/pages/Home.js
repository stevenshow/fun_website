import "./Home.css";
import TopBar from "../TopBar.js";
import rasp from "../img/raspberrypi.png";

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I am Steven Schoebinger</h1>
      <div className="cardHolder">
        <div className="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="container">
            <h4>
              <b>Raspberry Pi</b>
            </h4>
            <p>Model 4</p>
          </div>
        </div>
        <div class="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="container">
            <h4>
              <b>Raspberry Pi</b>
            </h4>
            <p>Model 4</p>
          </div>
        </div>
        <div className="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="container">
            <h4>
              <b>Raspberry Pi</b>
            </h4>
            <p>Model 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
