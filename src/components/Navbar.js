import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <nav className="navbar fixed-navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Bask Energy Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="top-bar">
       
          <a
            href="tel:+919583745459"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Call +91 9583745459"
          >
            <FaPhone /> +91 9583745459
          </a>
        
        <span>
          <a
            href="mailto:info@baskenergy.co.in"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Send an email to info@baskenergy.co.in"
          >
            <FaEnvelope /> info@baskenergy.co.in
          </a>
        </span>
        <span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+INDIA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="View location Hyderabad, India on Google Maps"
          >
            📍 Hyderabad, INDIA
          </a>
        </span>

        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
