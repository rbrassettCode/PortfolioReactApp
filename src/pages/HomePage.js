import React from 'react';
import './../Stylesheet.css';
import imageSrc from '../images/profile-pic.jpg'
import Contact from './Contact';
import { Container, Row, Col, Image } from 'react-bootstrap';

function HomePage() {
    return (
      <Container>
        <Row >
          <Col sm={12} md={4}>
            <Image fluid roundedCircle src={imageSrc} alt="profile-pic" />
          </Col>
          <Col sm={12} md={4} className="d-flex align-items-end">
            <h2>Hi there!</h2>
          </Col>
        </Row>
        <Row>
          <Col className='pt-4'>
            <p>I'm Robert Brassett, a software developer with a keen knack for crafting efficient software that addresses genuine challenges. With 3 years under my belt, I've extensively worked on backend systems, especially with Spring Boot. Java is my forte, but I'm a firm believer in continuous learning and regularly dive into new technologies to sharpen my skill set.</p>
            <p>Beyond the digital realm, I cherish the great outdoors. Whether it's embarking on extensive hikes with my canine companion, scaling rocky terrains through rock climbing, or simply soaking in the local scenery on leisurely bike rides, these activities fuel my creativity and ensure I strike the right work-life balance. </p>
            <p>Should you wish to dive deeper into my experience or brainstorm about a potential collaboration, I'm just a message away. Thanks for stopping by!</p>
          </Col>
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    );
  }

  export default HomePage;
