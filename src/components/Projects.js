
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";

export const Projects = () => {

    const projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        
      },
      {
        title: "Business Startup",
        description: "Design & Development",
       
      },
      {
        title: "Business Startup",
        description: "Design & Development",
     
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        
      },
      {
        title: "Business Startup",
        description: "Design & Development",
       
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
                    <Tab.Pane eventkey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <p>{project.title}</p>
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