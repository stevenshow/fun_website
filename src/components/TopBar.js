import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="header">
      <p>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="green-highlight"> echo </span>Welcome to{" "}
        <span className="blue-highlight">$NAME\'s</span> website!
        <div>Welcome to Steven's website!</div>
        <span className="green-highlight">steven@schoebinger</span>:
        <span className="blue-highlight">~</span>$
        <span className="cursor"> _</span>
      </p>
      <div className="links-right">
        <button type="button" className="home-nav">
          Home
        </button>
        <button type="button" className="projects-nav">
          Projects
        </button>
        <button type="button" className="contact-nav">
          Contact
        </button>
      </div>
    </div>
  );
};

export default TopBar;

// <div class="topnav">
//   <a className="home-nav" href="home">
//     Home
//   </a>
//   <a className="projects-nav" href="projects">
//     Projects
//   </a>
//   <a className="contact-nav" href="contact">
//     Contact
//   </a>
//   {/* <a href="about">About</a> */}
// </div>
