

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Spark Electronic</h2>
          <p>Your trusted source for quality products and exceptional service.</p>
          <nav>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Brand Center</a>
            <a href="#">Blog</a>
          </nav>
        </div>

        <div className="footer-section">
          <h2>HELP CENTER</h2>
          <p>We're here to assist you. Reach out to us through Discord, Twitter, or Facebook.</p>
          <nav>
            <a href="#">Discord Server</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        <div className="footer-section">
          <h2>LEGAL</h2>
          <p>Read our Privacy Policy, Licensing, and Terms & Conditions.</p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Licensing</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>

        <div className="footer-section">
          <h2>DOWNLOAD</h2>
          <p>Download our app on iOS, Android, Windows, or MacOS.</p>
          <nav>
            <a href="#">iOS</a>
            <a href="#">Android</a>
            <a href="#">Windows</a>
            <a href="#">MacOS</a>
          </nav>
        </div>
      </div>

      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="bottom-bar">
        <p>&copy; 2024 uditvaja™</p>
      </div>
    </footer>
  );
};

export default Footer;
