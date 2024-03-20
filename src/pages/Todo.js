import React, { useState, useEffect } from 'react';
import './../Stylesheet.css';
import { Badge, Button, Col, Container, Form, FormLabel, ListGroup, Row } from 'react-bootstrap';

function TodoList() {
  const [todos, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem('todo-items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(todos));
  }, [todos]);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = id => {
    const newItems = todos.filter((_, index) => index !== id);
    setItems(newItems);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call a function or trigger an action when Enter key is pressed
      console.log('Enter key pressed');
      addItem();
    }
  };

  return (
    <Container>
      <Row>
        <h1>To-Do List</h1>
      </Row>
      <Row>
      <Form.Control
          placeholder="Add an item"
          aria-label="Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </Row>
      <Row className='justify-content-center'>
        <Button className='my-3 col-6' variant='secondary' onClick={addItem}>Add</Button>
      </Row>
      <Row>
        <Col className='col-12'>
        <ListGroup>
          {todos.map((item, index) => (
            <ListGroup.Item className="d-flex justify-content-between align-items-start" key={index}>
              <Form.Check
              className='col-1'
              checked={checkedItems[index] || false}
              onChange={() => handleCheckboxChange(index)}
              />
              <div style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }} >
                {item}
              </div>
              <Badge bg="primary" pill onClick={() => handleDelete(index)}>X</Badge>

            </ListGroup.Item>
          ))}
        </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;