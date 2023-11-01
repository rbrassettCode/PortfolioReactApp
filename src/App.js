import Weather from './pages/Weather';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { BsFillGridFill } from 'react-icons/bs';

import HomePage from './pages/HomePage';
import Footer from './Footer';
import './Stylesheet.css';
import './App.css';
import TodoList from './pages/Todo';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import initialsIcon from './images/initials-icon.png';
import Wordle from './pages/Wordle';
import TaskBoard from './pages/TaskBoard';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import PlantMonitor from './pages/PlantMonitor';

function App() {
  
  Amplify.configure(awsconfig);
  
  return (
    <Router >
      <Navbar bg="dark" variant="dark"> 
          <img className='image-navbar' src={initialsIcon} alt='initialsIcon'/>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Projects</Nav.Link>
          <Nav.Link href="/aboutMe">About Me</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<Projects/>} />
        <Route path="/portfolio/Weather" element={<Weather/>} />
        <Route path="/portfolio/TodoList" element={<TodoList/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
        <Route path="/portfolio/Wordle" element={<Wordle/>} />
        <Route path="/portfolio/TaskBoard" element={<TaskBoard/>} />
        <Route path="/portfolio/PlantMonitor" element={<PlantMonitor/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
