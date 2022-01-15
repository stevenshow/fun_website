import './TopBar.css';

const TopBar = () =>{
  return (
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div>
          <div className='logo'>Logo Here</div>
        </div>
    </div>
  );
}

export default TopBar;
