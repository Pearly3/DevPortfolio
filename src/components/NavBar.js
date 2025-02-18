import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../assets/img/home-svgrepo-com.svg'
import navIcon1 from '../assets/img/icons8-github-48.png'
import navIcon2 from '../assets/img/icons8-instagram-48.png'
import navIcon3 from '../assets/img/icons8-linkedin-48.png'



const [activeLink, setActiveLink] = useState('home')
const [scrolled, seScrolled] = useState(false)


useEffect( () => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false)
    }
  }
  window.addEventListener("scroll", onScroll);

  return() => window.removeEventListener("scroll", onScroll);
}, []) 

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "sscrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Home} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=''/></a>
                <a href="#"><img src={navIcon2} alt=''/></a>
                <a href="#"><img src={navIcon3} alt=''/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}></button> <span>Let's Connect</span> 
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
