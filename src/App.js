import './css/App.css';
import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';
import Project from './components/Project'
import Archiving from './components/Archiving'
import JHportfolio from './components/JHportfolio';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  let navigate = useNavigate()

  return (

    
    
    <div className="App">
      <div className='NavBar'>
        <Navbar bg="dark" variant="dark" style={{}}>
          <Container>
            <Navbar.Brand onClick={()=>{navigate('/')}}>J.H portfolio</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={()=>{navigate('AboutMe')}}>About Me</Nav.Link>
                <Nav.Link onClick={()=>{navigate('Skills')}}>Skills</Nav.Link>
                <Nav.Link onClick={()=>{navigate('Project')}}>Project</Nav.Link>
                <Nav.Link onClick={()=>{navigate('Archiving')}}>Archiving</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className='Page'>
      <Routes>
          <Route path='/' element={<JHportfolio/>}></Route>
          <Route path='/AboutMe' element={<AboutMe/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route>
          <Route path='/Project' element={<Project/>}></Route>
          <Route path='/Archiving' element={<Archiving/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
