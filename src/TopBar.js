import "./TopBar.css";

//TODO Find out how to make the top bar "sticky"

const TopBar = () => {
  return (
    <div class="topnav">
      <a className="home-nav" href="home">
        Home
      </a>
      <a className="projects-nav" href="projects">
        Projects
      </a>
      <a className="contact-nav" href="contact">
        Contact
      </a>
      {/* <a href="about">About</a> */}
    </div>
  );
};

export default TopBar;
