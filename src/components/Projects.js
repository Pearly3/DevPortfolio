import { ProjectCard } from "./ProjectCard";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/ZoroHeader.png"


export const Projects = () => {

    const projects = [
        {
          title: "Project title 1",
          description: "Description 1",
          imgUrl: projImg1,
        },
        {
          title: "Project title2",
          description: "Description 2",
          imgUrl: projImg1,
        },
        {
          title: "Project title 3",
          description: "Description 3",
          imgUrl: projImg1,
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
                    <p>Placeholder text</p>
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
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Placeholder</Tab.Pane>
                    <Tab.Pane eventKey="third">Placeholder</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}