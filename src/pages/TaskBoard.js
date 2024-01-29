import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { listTasks } from "./../graphql/queries.js";
import { createToDo } from './../graphql/mutations';
import TaskCard from './TaskCard';
import './../Stylesheet.css';
import CreateTaskModal from "./CreateTaskModal.js";
import {Button, Col, Row, Container, Card,  Modal, InputGroup} from 'react-bootstrap'
import { deleteTask } from './../graphql/mutations';


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
        handleDelete(taskId)
    }

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
            console.log(temp);
        } catch (error) {
            console.error("An error occurred:", error);
        }
       
    }

    function addTaskFromState(task) {
        console.log("Adding task: ", task);
        setDataList(prevTasks => [...prevTasks, task]);
    }
    
    return (
        <div>
            <Container>

                <Row>
                    <Col className="col-12 mx-auto" md={4}>
                        <Button variant='primary' size="lg" type='submit' onClick={() => setModalOpen(true)}> Create New Task</Button>
                    </Col>

                    <Modal show={isModalOpen} onHide={() => setModalOpen(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Task</Modal.Title>
                            <Modal.Body>
                                <InputGroup>
                                    
                                </InputGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button>
                                    submit
                                </Button>
                            </Modal.Footer>
                        </Modal.Header>
                    </Modal>

                </Row>
                <Row>
                    <h2>Task Board</h2>
                </Row>
                <Row>
                    <Col className="col-12" md={6} lg={4}>
                        <Row>
                            <h2>To Do</h2>
                        </Row>
                            <Col className="col-12">
                                {allTasks
                                    .filter((task) => task.status === "TODO")
                                    .map((task) => (
                                        <Row className="p-4">
                                            <Card className='p-4' style={{ background: 'linear-gradient(to right, #3498db, #9b59b6)' }} key={task.id} id={task.id}>
                                                <Card.Body>
                                                    <Card.Title>{task.title}</Card.Title>
                                                    <Card.Text>
                                                        {task.description}
                                                    </Card.Text>
                                                    <Button  onClick={() => removeTaskFromState(task.id)}>X</Button>
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                ))}
                            </Col>
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <Row>
                            <h2>In Progress</h2>
                        </Row>
                            <Col className="col-12">
                                {allTasks
                                    .filter((task) => task.status === "IN_PROGRESS")
                                    .map((task) => (
                                        <Row className="p-4">
                                            <Card className='p-4' style={{ background: 'linear-gradient(to right, #3498db, #9b59b6)' }} key={task.id}>
                                                <Card.Body>
                                                    <Card.Title>{task.title}</Card.Title>
                                                    <Card.Text>
                                                        {task.description}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                ))}
                            </Col>
                    </Col>
                    <Col className="col-12" md={6} lg={4}>
                        <Row>
                            <h2>Completed</h2>
                        </Row>
                            <Col className="col-12">
                                {allTasks
                                    .filter((task) => task.status === "COMPLETE")
                                    .map((task) => (
                                        <Row className="p-4">
                                            <Card className='p-4' style={{ background: 'linear-gradient(to right, #3498db, #9b59b6)' }} key={task.id}>
                                                <Card.Body>
                                                    <Card.Title>{task.title}</Card.Title>
                                                    <Card.Text>
                                                        {task.description}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                ))}
                            </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TaskBoard;