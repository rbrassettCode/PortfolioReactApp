import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import TodoList from "./Todo.js";
import PomodoroClock from "./PomodoroClock.js";

function DeveloperTab() {

    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState('Welcome to the Developer Tab');

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);
        setGreeting(getTimeOfDay)
    return () => clearInterval(interval);
  }, []);

    const getTimeOfDay = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning ☀️';
        } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good Afternoon 🌇';
        } else {
        return 'Good Evening 🌙';
        }
    }

    return (
        <Container>
            <Row>
                <Col className="my-3">
                    <h1>{greeting}</h1>
                    <h2>{time.toLocaleTimeString()}</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-12" md={6}>
                    <PomodoroClock/>
                </Col>
                <Col>
                    <TodoList/>
                </Col>
            </Row>
        
        </Container>
    );
}

export default DeveloperTab;