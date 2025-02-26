import { ProjectCard } from "./ProjectCard";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/ZoroHeader.png"
import testImg from "../assets/img/FuryRoam2.png"
import img2 from "../assets/img/PearlyFitness2.jpg"
import img3 from "../assets/img/Uplist.png"


export const Projects = () => {

    const projects = [
        {
          title: "FuryRoam",
          description: "A React-based travel recommendation application featuring interactive user questionnaires and dynamic data visualisation. Built with a modern tech stack including React components for the frontend UI, REST API integrations for real-time travel data, and an interactive 3D globe visualization. The application implements custom hooks for state management and API communication, delivering personalized travel recommendations based on user preferences. Tech Stack: React.js, JavaScript (ES6+), Node.js, Python/Flask Backend, HTML5, CSS3, Three.js, RESTful APIs. (Note: Application is hosted on a free-tier service - initial load may take ~5 minutes for the server to spin up). \nClick this box to view or visit at: https://travel-recommendation-ocw2.onrender.com/",
          imgUrl: testImg,
          projectUrl: "https://travel-recommendation-ocw2.onrender.com/"
        },
        {
          title: "Pearly Fitness",
          description: "A comprehensive fitness tracking application developed to gain hands-on experience with cloud databases through Google Cloud Platform (GCP) and data analytics algorithms. Built with a focus on understanding real-world database interactions in deployed applications, this project combines cloud technology expertise with personal fitness passion. Features include workout logging, progress tracking, and data-driven insights using polynomial regression for analyzing training patterns. The application leverages Firestore for real-time data storage and retrieval, enabling personal fitness goal tracking and performance analytics. Tech Stack: React.js, Firebase/Firestore, GCP, JavaScript, Data Analytics Algorithms.",
          imgUrl: img2,
        },
        {
          title: "Uplist",
          description: "Description 3",
          imgUrl: img3,
        },
        {
          title: "Project title 4",
          description: "Description 4",
          imgUrl: projImg1,
        },
        {
          title: "Project title 5",
          description: "Description 5",
          imgUrl: projImg1,
        },
        {
          title: "Project title 6",
          description: "Description 6",
          imgUrl: projImg1,
        },
      ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        index={index}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Coming soon!</Tab.Pane>
                    <Tab.Pane eventKey="third">Coming soon!</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}