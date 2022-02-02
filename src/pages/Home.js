import "./Home.css";
import TopBar from "../TopBar.js";
import rasp from "../img/raspberrypi.png";
import linux from "../img/linux_logo.png";
import python from "../img/python_logo.png"

const Home = () => {
  return (
    <div className="home">
      <h1 className="header">Hi, I am Steven Schoebinger</h1>
      <div className="cardHolder">
        <div className="card">
          <img src={linux} alt="linux logo" />
          <div className="content">
            <h3>
              <b>Linux</b>
            </h3>
            <p>
              Linux is the best-known and most-used open source operating
              system. As an operating system, Linux is software that sits
              underneath all of the other software on a computer, receiving
              requests from those programs and relaying these requests to the
              computer’s hardware.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="content">
            <h3>
              <b>Raspberry Pi</b>
            </h3>
            <p>
              The Raspberry Pi is a low cost, credit-card sized computer that
              plugs into a computer monitor or TV, and uses a standard keyboard
              and mouse. It is a capable little device that enables people of
              all ages to explore computing, and to learn how to program in
              languages like Scratch and Python. It’s capable of doing
              everything you’d expect a desktop computer to do, from browsing
              the internet and playing high-definition video, to making
              spreadsheets, word-processing, and playing games.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={python} alt="python logo" />
          <div className="content">
            <h3>
              <b>Python</b>
            </h3>
            <p>
              Python is an interpreted, object-oriented, high-level programming
              language with dynamic semantics. Its high-level built in data
              structures, combined with dynamic typing and dynamic binding, make
              it very attractive for Rapid Application Development, as well as
              for use as a scripting or glue language to connect existing
              components together. Python's simple, easy to learn syntax
              emphasizes readability and therefore reduces the cost of program
              maintenance. Python supports modules and packages, which
              encourages program modularity and code reuse. The Python
              interpreter and the extensive standard library are available in
              source or binary form without charge for all major platforms, and
              can be freely distributed.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="content">
            <h3>
              <b>Raspberry Pi</b>
            </h3>
            <p>
              The Raspberry Pi is a low cost, credit-card sized computer that
              plugs into a computer monitor or TV, and uses a standard keyboard
              and mouse. It is a capable little device that enables people of
              all ages to explore computing, and to learn how to program in
              languages like Scratch and Python. It’s capable of doing
              everything you’d expect a desktop computer to do, from browsing
              the internet and playing high-definition video, to making
              spreadsheets, word-processing, and playing games.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={rasp} alt="raspberrypi" />
          <div className="content">
            <h3>
              <b>Raspberry Pi</b>
            </h3>
            <p>
              The Raspberry Pi is a low cost, credit-card sized computer that
              plugs into a computer monitor or TV, and uses a standard keyboard
              and mouse. It is a capable little device that enables people of
              all ages to explore computing, and to learn how to program in
              languages like Scratch and Python. It’s capable of doing
              everything you’d expect a desktop computer to do, from browsing
              the internet and playing high-definition video, to making
              spreadsheets, word-processing, and playing games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
