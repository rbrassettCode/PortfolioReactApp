import React from 'react';
import './ProjectCard.css';
import { API } from "aws-amplify";
import { deleteTask } from './../graphql/mutations';


function TaskCard({ id, title, description, onTaskDeleted }) {

    const handleDelete = async (id) => {
        console.log("Deleting task: ", id);
        try{
            const temp = await API.graphql({
            query: deleteTask,
            variables: {
                input: { 
                    "id": id
                }
            }
            });
            onTaskDeleted(id);
            console.log(temp);
        } catch (error) {
            console.error("An error occurred:", error);
        }
       
    }

   
    return (
        <div className="project-card">
            <div className='project-title'>{title}</div>
            <div className='project-text'>{description}</div>
            <button
              className="delete-button"
              onClick={() => handleDelete(id)}
            >X</button>
        </div>
    );
}

export default TaskCard;