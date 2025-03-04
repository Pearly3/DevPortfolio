import { ProjectCard } from "./ProjectCard";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/ZoroHeader.png"
import testImg from "../assets/img/FuryRoam2.png"
import img2 from "../assets/img/PearlyFitness2.jpg"
import img3 from "../assets/img/Uplist.png"
import img4 from "../assets/img/Makers.png"
// Source Makers.tech
import img5 from "../assets/img/MakersBNB.png"
import comingSoonImg from "../assets/img/ComingSoonD.png"



export const Projects = () => {

    const projects = [
        {
          title: "FuryRoam",
          description: "This was my final colloborative project during my coding bootcamp. A React-based travel recommendation application featuring interactive user questionnaires and dynamic data visualisation. Built with a modern tech stack including React components for the frontend UI, REST API integrations for real-time travel data, and an interactive 3D globe visualization. The application implements custom hooks for state management and API communication, delivering personalized travel recommendations based on user preferences. Tech Stack: React.js, JavaScript (ES6+), Node.js, Python/Flask Backend, HTML5, CSS3, Three.js, RESTful APIs. (Note: Application is hosted on a free-tier service - initial load may take ~5 minutes for the server to spin up). \nClick this box to view or visit at: https://travel-recommendation-ocw2.onrender.com/",
          imgUrl: testImg,
          projectUrl: "https://travel-recommendation-ocw2.onrender.com/"
        },
        {
          title: "Pearly Fitness",
          description: "A comprehensive fitness tracking application developed built to gain hands-on experience with cloud databases through Google Cloud Platform (GCP) and data analytics algorithms. A significant area of focus for this project was on understanding real-world database interactions in deployed applications, this project combines cloud technology expertise with personal fitness passion. Features include workout logging, progress tracking, and data-driven insights using polynomial regression for analysing training patterns. The application leverages Firestore for real-time data storage and retrieval, enabling personal fitness goal tracking and performance analytics. Tech Stack: React.js, Firebase/Firestore, GCP, JavaScript, Data Analytics Algorithms. Deployment imminent come back soon if you want to check it out!",
          imgUrl: img2,
        },
        {
          title: "Uplist",
          description: "Contributed to the development of Uplist, a platform connecting emerging artists with event opportunities. Built with React for the frontend and Django/Azure backend, the platform enables artists to showcase their services and get booked for various events from house parties to club performances. Worked in agile teams, collaborating with other developers to successfully deploy and maintain the live platform. Tech Stack: React.js, Flask, Microsoft Azure, RESTful APIs. Click this box to visit Uplist.uk",
          imgUrl: img3,
          projectUrl: "https://Uplist.uk"
        },
        {
          title: "AceBook",
          description: "A collaborative project from Makers bootcamp implementing core Facebook features using JavaScript, Python, Flask, HTML, and CSS. MongoDB used for database. Features include user authentication with sessions/tokens, post creation, likes tracking, and comment functionality. Repository: github.com/jason-sayeed (repository currently private but if you have any questions feel free to reach out!)",
          imgUrl: img4,
        },
        {
          title: "MakersBNB",
          description: "This was a group project, completed during my time at makers bootcamp, that simulates the Airbnb website. It was my first hands-on experience with databases, the database in use is PostgreSQL and allows users to post and book properties for set time periods. Tech Stack: JavaScript, Python, Flask, HTML, CSS. The repository is located at: https://github.com/katrinamichanicou (repository currently private but if you have any questions feel free to reach out!)",
          imgUrl: img5,
        },
        {
          title: "Stay Tuned!",
      
          imgUrl: comingSoonImg,
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