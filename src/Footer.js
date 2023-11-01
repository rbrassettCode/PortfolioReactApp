import React, { useState, useEffect } from 'react';
import './Stylesheet.css';

function Footer() {
  return (
    <footer className='footer'>
      <a href="https://www.linkedin.com/in/robert-brassett-9058a9177/" target="_blank" className='footer-text'>
        <i className="fab fa-linkedin social-icon"></i>
         
      </a>

      <a href="https://github.com/rbrassettCode" target="_blank" className='footer-text'>
        <i className="fab fa-github social-icon"></i>
         
      </a>
    </footer>
  );
}

export default Footer;