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
          <button><a href="#Home">Home</a></button>
          <button><a href="#Work">Work</a></button>
          <button><a href="#Characteristics">Characteristics</a></button>
          <button><a href="#Résumé">Résumé</a></button>
          <button><a href="#about" onClick={openAbout}>About</a></button>
        </ul>
      </nav>
      {showAbout && (
        <div className="about-popup-overlay" onClick={closeAbout}>
          <div className="about-popup" onClick={e => e.stopPropagation()}>
            <button className="about-close" onClick={closeAbout}>&times;</button>
            <h2>About Me</h2>
            <p>
              Hi! I'm Sam Siu, an HBO ICT student and full-stack developer based in the Netherlands. I focus on building modern web applications using technologies like React, Node.js, and databases, with an interest in scalable system design and clean architecture.
              <br /><br />
              I have a background in software development (MBO), where I gained experience with Java, JavaScript, PHP, and MySQL. Since then, I've been expanding my skills through projects involving full-stack development, backend systems, and cloud technologies.
              <br /><br />
              In addition to web development, I have hands-on experience managing game server infrastructure, which has strengthened my understanding of real-world systems, performance, and deployment.
              <br /><br />
              I'm driven by continuous learning and enjoy turning ideas into practical, user-focused solutions. Currently, I'm looking for opportunities to grow as a developer and gain real-world experience in IT and development.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;