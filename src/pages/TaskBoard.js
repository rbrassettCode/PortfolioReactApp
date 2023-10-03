import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { listTasks } from "./../graphql/queries.js";
import { createToDo } from './../graphql/mutations';
import TaskCard from './TaskCard';
import './TaskBoard.css';
import CreateTaskModal from "./CreateTaskModal.js";


function TaskBoard() {
    const [allTasks, setDataList] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.graphql({
                    query: listTasks
                });
                setDataList(response.data.listTasks.items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    function removeTaskFromState(taskId) {
        setDataList(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }

    function addTaskFromState(task) {
        console.log("Adding task: ", task);
        setDataList(prevTasks => [...prevTasks, task]);
    }
    
    return (
        <div>
            <button type='submit' onClick={() => setModalOpen(true)}>Create Task</button>
            <CreateTaskModal addTaskFromState={addTaskFromState} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            <div className="task-board-container">
                <h2>Task Board</h2>
                <div className="task-board">
                    <div className="task-board-column">
                        <h3>To Do</h3>
                        {allTasks
                        .filter((task) => task.status === "TODO")
                        .map((task) => (
                            <TaskCard 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            onTaskDeleted={removeTaskFromState}
                            />))}
                    </div>
                    <div className="task-board-column">
                        <h3>In Progress</h3>
                        {allTasks
                        .filter((task) => task.status === "IN_PROGRESS")
                        .map((task) => (
                            <TaskCard 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            onTaskDeleted={removeTaskFromState}
                            />))}
                    </div>
                    <div className="task-board-column">
                        <h3>Completed</h3>
                        {allTasks
                        .filter((task) => task.status === "COMPLETE")
                        .map((task) => (
                            <TaskCard 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            onTaskDeleted={removeTaskFromState}
                            />))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskBoard;