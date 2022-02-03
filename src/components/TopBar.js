import "./TopBar.css";

//TODO Find out how to make the top bar "sticky"

const TopBar = () => {
  return (
    <div className="header">
    <p>
      <span className="green-highlight">steven@schoebinger</span>:
      <span className="blue-highlight">~</span>$
      <span className="green-highlight">echo </span>Welcome to my website!
      <span className="cursor">_</span>
    </p>
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