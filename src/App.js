import Weather from './pages/Weather';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { BsFillGridFill } from 'react-icons/bs';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Footer from './Footer';
import './pages/Weather.css';
import './App.css';
import TodoList from './pages/Todo';
import Projects from './pages/Projects';

function App() {
  return (
    <Router >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <BsFillGridFill className="d-inline-block align-top" />{' '} 
          Robert Brassett
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/portfolio">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<Projects/>} />
        <Route path="/portfolio/Weather" element={<Weather/>} />
        <Route path="/portfolio/TodoList" element={<TodoList/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
