import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sam Siu</h1>
      <ul className='nav-links'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Work</a></li>
        <li><a href="/">Characteristics</a></li>
        <li><a href="/">Résumé</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;