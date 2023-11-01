import React from 'react';
import './../Stylesheet.css';
import {Nav} from 'react-bootstrap';


function ProjectCard({ title, description, imageUrl, routelink}) {
   

    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className='project-title'>{title}</div>
            <div className='project-text'>{description}</div>
            <button type="submit">
                <Nav.Link href={routelink}>Try Me</Nav.Link>
            </button>
        </div>
    );
}

export default ProjectCard;