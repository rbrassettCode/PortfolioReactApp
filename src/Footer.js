import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <a href="https://www.linkedin.com/in/robert-brassett-9058a9177/" target="_blank" className='footer-text'>
        <i className="fab fa-linkedin social-icon"></i>
        LinkedIn
      </a>
      <br />
      <a href="https://github.com/rbrassettCode" target="_blank" className='footer-text'>
        <i className="fab fa-github social-icon"></i>
        GitHub
      </a>
    </footer>
  );
}

export default Footer;