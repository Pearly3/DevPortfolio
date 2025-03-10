
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/img/text-1740567997734.png';
import Nav1 from '../assets/img/nav-icon1.svg'
import Nav2 from '../assets/img/github-mark-white.png'
import Nav3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {
  
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/benjpearl" target="_blank" rel="noopener noreferrer"><img src={Nav1} alt="" /></a>
                <a href="https://github.com/Pearly3" target="_blank" rel="noopener noreferrer"><img src={Nav2} alt="" /></a>
                <a href="https://www.instagram.com/_ben_pearl/" target="_blank" rel="noopener noreferrer"><img src={Nav3} alt="" /></a>
              </div>
              <button className="vvd" onClick={() => {onUpdateActiveLink('connect'); document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}
