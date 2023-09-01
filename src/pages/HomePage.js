import React from 'react';
import './HomePage.css';
import imageSrc from '../images/profile-pic.jpg'
import Contact from './Contact';

function HomePage() {
    return (
      <div className='container'>
        <div className='image-container'>
          <img className='image-profile-pic' src={imageSrc} alt="profile-pic" />
          <h2 className='image-text'>Hi there!</h2>
        </div>
        <br />
        <div className='text-box'>
          <p>I'm Robert Brassett, a software developer with a keen knack for crafting efficient software that addresses genuine challenges. With 3 years under my belt, I've extensively worked on backend systems, especially with Spring Boot. Java is my forte, but I'm a firm believer in continuous learning and regularly dive into new technologies to sharpen my skill set.</p>
          <p>Beyond the digital realm, I cherish the great outdoors. Whether it's embarking on extensive hikes with my canine companion, scaling rocky terrains through rock climbing, or simply soaking in the local scenery on leisurely bike rides, these activities fuel my creativity and ensure I strike the right work-life balance. </p>
          <p>Should you wish to dive deeper into my experience or brainstorm about a potential collaboration, I'm just a message away. Thanks for stopping by!</p>
        </div>
        <br />
        <Contact />
      </div>
    );
  }

  export default HomePage;
