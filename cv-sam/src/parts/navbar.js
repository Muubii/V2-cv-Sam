
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = (e) => {
    e.preventDefault();
    setShowAbout(true);
  };

  const closeAbout = () => setShowAbout(false);

  return (
    <>
      <nav className="navbar">
        <h1>Sam Siu</h1>
        <ul className='nav-links'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#Characteristics">Characteristics</a></li>
          <li><a href="#Résumé">Résumé</a></li>
          <li><a href="#about" onClick={openAbout}>About</a></li>
        </ul>
      </nav>
      {showAbout && (
        <div className="about-popup-overlay" onClick={closeAbout}>
          <div className="about-popup" onClick={e => e.stopPropagation()}>
            <button className="about-close" onClick={closeAbout}>&times;</button>
            <h2>About Me</h2>
            <p>
              Hi! I'm Sam Siu, a passionate software developer currently studying at Windesheim in Almere. I love building web applications, learning new technologies, and collaborating with others. I'm fluent in Dutch, English, and my mother Language is Cantonese/Mandarin.<br/><br/>
              I've learned Java, Javascript, PHP, and MySQL through my studies and projects. I've also developed strong teamwork, communication, and problem-solving skills. My goal is to become a full-stack developer, always eager to learn and grow. <br/><br/>
              Feel free to check out my projects to see my work and journey as a developer.<br/><br/>
              In my free time, I enjoy creative projects, exploring tech trends, and working on personal growth.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;