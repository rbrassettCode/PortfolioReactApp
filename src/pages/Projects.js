import React from "react";
import ProjectCard from './ProjectCard';
import weatherIcon from '../images/weather_icon.png';
import todoIcon from '../images/to-do-list.png';
import wordleIcon from '../images/wordle_icon.png'
import rpiIcon from '../images/raspberry_icon.png'
import './../Stylesheet.css';

function Projects() {
    const projectData = [
        {
            title: "Weather App",
            description: "This app uses the openweathermap API's to search the current weather of a given major city.",
            imageUrl: weatherIcon,
            routelink: "/portfolio/Weather"
        },
        {
            title: "To Do List",
            description: "A simple application where you can create and delete tasks that you need to complete that are saved under local storage so they are not lost.",
            imageUrl: todoIcon,
            routelink: "/portfolio/ToDoList"
        },
        {
            title: "Wordle",
            description: "I made a clone of the popular game wordle.",
            imageUrl: wordleIcon,
            routelink: "/portfolio/Wordle"
        },
        {
            title: "Plant Monitor",
            description: "IoT project to keep my plants alive and view the data",
            imageUrl: rpiIcon,
            routelink: "/portfolio/PlantMonitor"
        },
    ];

    return (
        <div className="projects-container" style={{display: "flex"}} >
            {projectData.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    routelink={project.routelink}
                />
            ))} 
        </div>
    );
}

export default Projects;