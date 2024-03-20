import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function PomodoroClock() {
  const [time, setTime] = useState(25 * 60); // Initial time in seconds (25 minutes)
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsBreak(prevIsBreak => !prevIsBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60); // Work time: 25 minutes, Break time: 5 minutes
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const skipToNext = () => {

    setIsActive(false);
    setTime(5 * 60)
    setIsBreak(true);
  }

  return (
    <Container>
        <Card className='col-12' style={{ backgroundColor: isBreak  ?'#32CD32'  : isActive ? '#DC143C' : '#4169E1' }}>
            <Row>
                <h1>Pomodoro Clock</h1>
            </Row>
            <Row>
                <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
                <h2>{formatTime(time)}</h2>
            </Row>
            <Row className='align-items-center justify-content-center'>
                <Col className='col-2'>
                    <Button variant="secondary" className="mb-3" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</Button>
                  </Col>
                  <Col className='col-2'>
                    <Button variant="secondary" className="mb-3" onClick={resetTimer}>Reset</Button>
                </Col>
                <Col className='col-2'>
                  <Button variant="secondary" className="mb-3" onClick={skipToNext}>Skip</Button>
                </Col>
            </Row>
        </Card>
    </Container>
  );
}

export default PomodoroClock;