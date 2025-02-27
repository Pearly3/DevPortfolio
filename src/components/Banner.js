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
    const wordRotate = ["Full-Stack Developer", "Data Engineer", "Passionate Coder, Tech Lover" ];
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
                 <p className="animate__animated animate__fadeIn animate__delay-2s">I am an ambitious, flexible, and personable graduate with a highly analytical mindset. Committed to continuous learning through a passion for technology and software by expanding knowledge of relevant technologies and their subsequent applications. A natural team player, able to drive efficiency by focusing on strategies which achieve results. My experience with sales and outreach has sharpened my already strong communication and collaboration skills and combined with my eagerness to learn and exceptional problem solving skills, I am confident and excited to contribute to an ambitious technology team. I recently completed the Makers software development bootcamp which allowed me to sharpen my ability as a software developer.</p>
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
    
    