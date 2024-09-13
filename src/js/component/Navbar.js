import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#about" className="navbar-brand">
        Franco.dev
      </a>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#tech">Tech</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Ícono de menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
