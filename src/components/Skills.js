import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/ProgrammingLang.png";
// Image from: "Create a browser readable document using Github Actions Series 2: using Python"
// Source: https://medium.com/@j622amilah/create-a-browser-readable-document-using-github-actions-series-2-using-python-d2ffd770f6b1
import meter2 from "../assets/img/React-icon.png";
// React logo (modified) - Copyright (c) Meta Platforms, Inc. and affiliates.
import meter3 from "../assets/img/meter3.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const technicalSkills = [
    { title: "Languages", details: "Python, JavaScript, TypeScript, Swift, HTML, CSS", icon: meter1 },
    { title: "Frameworks", details: "React, React Native, Bootstrap, Node.js, Django, Flask", icon: meter2 },
    { title: "Cloud & Tools", details: "Git, Firebase, GCP, SQL, NodeJS, Docker", icon: meter3 },
    { title: "Development", details: "TDD, OOP, Agile, CI-CD", icon: meter1 }
  ];

  const transferableSkills = [
    { title: "Problem Solving", details: "Analytical thinking and strategic approach", icon: meter2 },
    { title: "Communication", details: "Excellent collaboration and presentation skills", icon: meter3 },
    { title: "Project Management", details: "Coordination and planning expertise", icon: meter1 },
    { title: "Leadership", details: "Team leading and mentoring abilities", icon: meter2 }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {technicalSkills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.icon} alt="Skill" />
                    <h5>{skill.title}</h5>
                    <p>{skill.details}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="skill-bx">
              <h2>Transferable Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {transferableSkills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.icon} alt="Skill" />
                    <h5>{skill.title}</h5>
                    <p>{skill.details}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};