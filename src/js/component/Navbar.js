import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  // Estado para manejar si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#about" className="navbar-brand">
        Franco.dev
      </a>
      {/* Lista de enlaces, visible solo si el menú está abierto en pantallas pequeñas */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#tech">Tech</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Ícono de menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icono de hamburguesa */}
      </div>
    </nav>
  );
};

export default Navbar;
