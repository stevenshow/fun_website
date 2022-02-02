import './TopBar.css';

//TODO Find out how to make the top bar "sticky"

const TopBar = () =>{
  return (
    <div class="topnav">
        <a href="home">Home</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact</a>
        <a href="about">About</a>
    </div>
  );
}

export default TopBar;
