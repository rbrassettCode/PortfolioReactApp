import React from "react";
import './../Stylesheet.css';

function Contact() {
  return (
    <div className="contact">
      <div className="center-content">
        <h2>Contact</h2>
        <a href="mailto:rbrassett@outlook.com" target="_blank" className='link-text'>rbrassett@outlook.com</a>
        <br />
        <div className="center-content">
          <a href="https://www.linkedin.com/in/robert-brassett-9058a9177/" target="_blank" className='link-text'>
            <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a href="https://github.com/rbrassettCode" target="_blank" className='link-text'>
            <i className="fab fa-github social-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;