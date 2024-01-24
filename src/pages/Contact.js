import React from "react";
import './../Stylesheet.css';
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <Container className="pt-4">
      <Row>
        <Col >
          <h2>Contact</h2>
          <a href="mailto:rbrassett@outlook.com" target="_blank" className='link-text'>rbrassett@outlook.com</a>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://www.linkedin.com/in/robert-brassett-9058a9177/" target="_blank" className='link-text'>
              <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a href="https://github.com/rbrassettCode" target="_blank" className='link-text'>
            <i className="fab fa-github social-icon"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;