import React from 'react';
import './ContactForm.css'; // Add this for styling

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="overlay">
        <div className="contact-header">
          <p className="header-subtitle">Where to Start</p>
          <h2 className="header-title">Make Your First Steps Towards Solar</h2>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-form-content">
            <h3>Contact us For More Information.</h3>
            <div className="contact-location">
              <h3>Hyderabad, INDIA</h3>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Enter Your First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input type="tel" id="mobile" placeholder="Enter Your Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Id</label>
                  <input type="email" id="email" placeholder="Enter Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Enter Your Message"></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
