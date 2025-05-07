import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          <h2 className="footer-title">Udaykiran Yennampelly</h2>
          <p className="footer-text">B.Tech, IIT Bombay</p>
          <p className="footer-text">Manager, Abhyuday web manager IIT Bombay</p>
          <p className="footer-text">Contact: +91 9381406475</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/uday-yennampelly-700969252/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/udaykiran4383"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="footer-italic">
            Looking forward to the opportunity of an interview. Thank you for considering my application!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
