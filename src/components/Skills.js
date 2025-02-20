import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sicon1 from "../assets/img/ProgrammingLang.png";
// Image from: "Create a browser readable document using Github Actions Series 2: using Python"
// Source: https://medium.com/@j622amilah/create-a-browser-readable-document-using-github-actions-series-2-using-python-d2ffd770f6b1
import Sicon2 from "../assets/img/React-icon.png";
// React logo credit:
// Created by Kiranshastry
// Source: https://www.flaticon.com/free-icon/physics_1126012?term=react&page=1&position=4&origin=search&related_id=1126012
import Sicon3 from "../assets/img/Cloud.png";
// Cloud icon credit:
// Created by heisenberg_jr on Flaticon
// Source: https://www.flaticon.com/free-icon/cloud_10542369?term=cloud&page=1&position=44&origin=search&related_id=10542369
import Sicon4 from "../assets/img/Database.png"
// Database icon credt:
// Created by Vectorslab:
// Source: https://www.flaticon.com/free-icon/database-management_9672242?term=database&page=1&position=8&origin=tag&related_id=9672242
import Sicon5 from "../assets/img/Devlopment.png"
// Software developent icon credit:
// Created by Flat Icons
// Source: https://www.flaticon.com/free-icon/backend_6213731?term=software+development&page=1&position=35&origin=search&related_id=6213731
import Sicon6 from "../assets/img/ProblemSolving.png"
// Problem solving icon credit:
// Created by Iconic Panda
// Source: https://www.flaticon.com/free-icon/problem-solving_7277059?term=problem+solving&page=1&position=59&origin=search&related_id=7277059
import Sicon7 from "../assets/img/Communication.png"
// Communication icon credit:
// Created by Vectors Market
// Source: https://www.flaticon.com/free-icon/chat_610413?term=communication&page=1&position=7&origin=search&related_id=610413
import Sicon8 from "../assets/img/ProjectManagement.png"
// Project management icon credit:
// Created by itim2101
// Source: https://www.flaticon.com/free-icon/clipboard_2683274?term=project+management&page=1&position=13&origin=search&related_id=2683274
import Sicon9 from "../assets/img/StakeholderRelations.png"

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
    { title: "Languages", details: "Python, JavaScript, TypeScript, Swift, HTML, CSS", icon: Sicon1 },
    { title: "Frameworks", details: "React, React Native, Bootstrap, Django, Flask", icon: Sicon2 },
    { title: "Cloud & Tools", details: "Git, Firebase, GCP, SQL, Node.js, npm, Docker", icon: Sicon3 },
    { title: "Database Management", details: "PostgreSQL, MongoDB, Firestore, SQL, NoSQL, CRUD Operations", icon: Sicon4 },
    { title: "Development", details: "TDD, OOP, Agile, CI-CD, Jira, Code Reviews, Version Control, REST APIs, Documentation", icon: Sicon5 }
];

  const transferableSkills = [
    { title: "Problem Solving", details: "Analytical thinking and strategic approach", icon: Sicon6 },
    { title: "Communication", details: "Excellent collaboration and presentation skills", icon: Sicon7 },
    { title: "Project Management", details: "Coordination and planning expertise", icon: Sicon8 },
    { title: "Stakeholder Relations", details: "Managing client and team relationships", icon: Sicon9 }
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