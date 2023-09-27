import React, {useEffect} from "react";
import { API } from "aws-amplify";
import { listTasks } from "./../graphql/queries.js";
import TaskCard from './TaskCard';

function TaskBoard() {
    // List all items
    const allTasks = API.graphql({
        query: listTasks

    });
    
     
    return (
        <div>
            <div className="task-board-container">
                <h2>Task Board</h2>
                <div className="task-board">
                    <div className="task-board-column">
                        <h3>To Do</h3>
                        {allTasks.map((task) => (
                            <TaskCard 
                            title={task.title}
                            description={task.description}
                            />))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskBoard;