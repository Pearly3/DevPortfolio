import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import imgHeader from '../assets/img/ZoroHeader.png'

export const Banner = () => {
    const [numLoop, setnumLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordRotate = ["Full-stack Software Developer", "Data Engineer", "Cloud Engineer" ];
    const []
    return (
        <section className = "Banner" id="home">
            <Container>
                <Row className="align-items-center">
                   <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Welcome to my Portfolio</span>
                     <h1>{'Hi I\'m Ben Pearl'}<span className="wrap">web developer</span></h1>
                     <p> I am an ambitious, flexible, and personable graduate with a highly analytical mindset. Committed to continuous learning through a passion for technology and software by expanding knowledge of relevant technologies and their subsequent applications. A natural team player, able to drive efficiency by focusing on strategies which achieve results. My experience with sales and outreach has sharpened my already strong communication and collaboration skills and combined with my eagerness to learn and exceptional problem solving skills, I am confident and excited to contribute to an ambitious technology team. I recently completed the Makers software development bootcamp which allowed me to sharpen my ability as a software developer.</p>
                     <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>

                   
                   </Col>
                   <col xs={12} md ={6} xl={5}>
                     <img scr={imgHeader} alt="Header Img" />
                   </col>
                </Row>
            </Container>
        </section>

    )
    
    }