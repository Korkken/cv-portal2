import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';  

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">Tims Page</NavLink>
      
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {}
      </div>
      
      <ul className={isMenuOpen ? 'show' : ''}>
        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/aboutme" onClick={() => setIsMenuOpen(false)}>About Me</NavLink></li>
        <li><NavLink to="/CV" onClick={() => setIsMenuOpen(false)}>CV</NavLink></li>
        <li><NavLink to="/Projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink></li>
      </ul>
    </nav>
  );
};

