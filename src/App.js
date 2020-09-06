import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectPage from './pages/ProjectPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'UMESH',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello, I am Umesh',
        subTitle: 'I am a Developer',
        text: 'Be Relentless'
      },
      about: {
        title: 'About Me'

      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="header-color" collapseOnSelect expand="lg" >
            <Navbar.Brand>Umesh</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"> Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/education">Education</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/education" component={EducationPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Redirect to="/" />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;