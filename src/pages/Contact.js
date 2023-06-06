import React from "react";

function Contact() {
  return (
    <div className="contact">
    <div className="center-content">
    <h2>Contact</h2>
    <p>Feel free to contact me on any of these resources!</p>
    <a href="mailto:rbrassett@outlook.com" target="_blank" className='link-text'>rbrassett@outlook.com</a>
    <br />
    <a href="https://www.linkedin.com/in/robert-brassett-9058a9177/" target="_blank" className='link-text'>
      <i className="fab fa-linkedin social-icon"></i>
      LinkedIn
    </a>
    <br />
    <a href="https://github.com/rbrassettCode" target="_blank" className='link-text'>
      <i className="fab fa-github social-icon"></i>
      GitHub
    </a>
    </div>
  </div>
  );
}
export default Contact;