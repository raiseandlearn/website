import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>Email: raiseandlearn.np@gmail.com</li>
              <li>Ph: 6502106380</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Raise & Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
