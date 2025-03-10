import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import imgHeader from '../assets/img/ZoroHeader.png'
// Zoro image Credit:
// Source: WallpaperCave.com
// URL: https://wallpapercave.com/w/wp13376809
// Uploaded by: brentrivera6
import TrackVisibility from "react-on-screen";
import 'animate.css'
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [text, setText] = useState('');
    const [numLoop, setNumLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const wordRotate = ["Full-Stack Developer", "Data Engineer", "JavaScript Enthusiast",
  "React Developer",
  "Python Coder",
  "Problem Solver" ];
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    const [activeLink, setActiveLink] = useState('home');

    const tick = () => {
        let i = numLoop % wordRotate.length;
        let fullText = wordRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText);
        if (isDeleting) {
            setDelta(30); 
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setNumLoop(numLoop + 1);
            setDelta(500);
        }
    }
    return (
      <section className="banner" id="home">
      <Container>
          <Row className="align-items-center">
             <Col xs={12} md={6} xl={7}>
               <div>
                 <span className="tagline animate__animated animate__fadeIn">Welcome to my Portfolio</span>
                 <h1 className="custom-slide-in animate__animated animate__delay-1s">{'Hi I\'m Ben Pearl '}<span className="wrap">{text}</span></h1>
                 <p className="animate__animated animate__fadeIn animate__delay-2s">I am a full-stack developer with hands-on experience working with JavaScript, React, and libraries such as Jest, Redux, and React Router. I have further experience with Python, particularly Flask and Django frameworks. I have database experience through AWS, GCP, Azure, PostgreSQL, and MongoDB. Recently completed the Makers bootcamp to enhance my development skills. I combine technical proficiency with strong analytical problem-solving and effective communication developed through sales experience. A passionate learner and team player, I'm driven to deliver efficient solutions and excited to contribute to innovative technology teams.</p>
                 <button className="animate__animated animate__fadeIn animate__delay-3s" onClick={() => {onUpdateActiveLink('connect'); document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}}>Let's Connect<ArrowRightCircle size={25}/></button>
               </div>
             </Col>
             <Col xs={12} md={6} xl={5}>
               <div className="animate__animated animate__fadeIn animate__delay-3s">
                 <img src={imgHeader} alt="Header Img" />
               </div>
             </Col>
          </Row>
      </Container>
  </section>

    )

}
    
    