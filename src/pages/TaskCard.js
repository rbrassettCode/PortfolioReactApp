import React from 'react';
import './ProjectCard.css';


function TaskCard({ id, title, description}) {
   
    return (
        <div className="project-card">
            <div className='project-title'>{title}</div>
            <div className='project-text'>{description}</div>
        </div>
    );
}

export default TaskCard;