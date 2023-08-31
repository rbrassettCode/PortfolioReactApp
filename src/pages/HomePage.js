import React from 'react';
import './HomePage.css';
import imageSrc from '../images/profile-pic.jpg'
import Contact from './Contact';

function HomePage() {
    return (
      <div className='container'>
        <div className='image-container'>
        <img  src={imageSrc} alt="profile-pic" />
        <h2 className='image-text'>Hi there!</h2>
        </div>
        <br />
        <div className='text-box'>
          
          <p>My name is Robert Brassett, and I'm a software developer with 2 years of experience. I have a passion for building efficient software solutions that solve real-world problems.</p>
          <p>Throughout my career, I have worked primarily with backend systems using Spring Boot. I specialize in Java, and I am constantly learning and exploring new technologies to improve my skills.</p>
          <p>Outside of work, I enjoy taking my dog on long hikes, rock climbing and leasure bike rides around town. I find that this helps me to stay creative and maintain a healthy work-life balance.</p>
          <p>Thank you for taking the time to read about me. If you'd like to learn more about my experience or discuss a potential project, please don't hesitate to get in touch!</p>
        </div>
        <br />
        <Contact />
      </div>
    );
  }

  export default HomePage;
