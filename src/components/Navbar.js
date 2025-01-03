import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="top-bar">
        <span><FaPhone /> +91 9583745459</span>
        <span><FaEnvelope /> info@baskenergy.co.in</span>
        <span>📍 Hyderabad, INDIA</span>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <img height={80} width={150} src={logo} alt="Bask Energy Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
