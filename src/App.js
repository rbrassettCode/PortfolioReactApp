import React, { useState } from 'react';
import Weather from './pages/Weather';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { BsFillGridFill } from 'react-icons/bs';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Footer from './Footer';
import './pages/Weather.css';
import './App.css';
import TodoList from './pages/Todo';
import Blog from './pages/Blog';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <BsFillGridFill className="d-inline-block align-top" />{' '} 
          Robert Brassett
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Dropdown as={Nav.Item} onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
            show={isDropdownOpen}>
            <Dropdown.Toggle as={Nav.Link} >Portfolio</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/portfolio/Weather">Weather App</Dropdown.Item>
              <Dropdown.Item href="/portfolio/TodoList">To Do List</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio/Weather" element={<Weather/>} />
        <Route path="/portfolio/TodoList" element={<TodoList/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
