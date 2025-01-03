// src/Footer.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

import './Footer.css'; // Custom CSS for any additional styling
import image from '../assets/logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          {/* Logo and About Us Section */}
          <div className="col-md-3 mb-3">
            <div className="footer-logo">
              <img src={image} alt="Company Logo" className="img-fluid mb-2" />
              <p>We are dedicated to providing the best services to our customers.</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5>Featured Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark link-no-underline">About us</a></li>
              <li><a href="#" className="text-dark link-no-underline">What we do</a></li>
              <li><a href="#" className="text-dark link-no-underline">Our services</a></li>
              <li><a href="#" className="text-dark link-no-underline">Products</a></li>
            </ul>
          </div>

          {/* Keep in Touch Section */}
          <div className="col-md-3 mb-3"> 
            <h5 className="text-center text-md-start">Keep in Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill me-2"></i>
                <span className="text-dark">Hyderabad, India</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:info@baskenergies.com" className="text-dark link-no-underline">
                  info@baskenergies.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+919584754459" className="text-dark link-no-underline">
                  +91 9584754459
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="col-md-3 mb-3">
            <h5 className="text-center text-md-start">Social Media Links</h5>
            <div className="d-flex">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

         {/* Subscribe Us Section */}
         <div className="text-center mt-4">
          <h5>Subscribe Us</h5>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Email Address"
              aria-describedby="subscribe-button"
            />
            <button className="btn btn-danger" id="subscribe-button">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="text-center py-3">
          © 2024 MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
