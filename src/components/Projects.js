import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import navIcon2 from '../assets/img/Github.svg';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Messenger 2.O- Chat Web Application",
      description: "A Complete Mern Stack Project",
      imgUrl: projImg1,
    },
    {
      title: "Amazon UI Clone",
      description: "Built using React JS",
      imgUrl: projImg2,
    },
    {
      title: "Bicycle Shop",
      description: "A Complete Node JS Project",
      imgUrl: projImg3,
    },
    {
      title: "Weather Predictor",
      description: "Tech Stack Used- ReactJS",
      description : "A Project to get familiar with API",
      imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
           
              
                <h2>Projects</h2>
                <p>You can view my projects in a more descriptive manner on 
                <div className='social-icon'>
                <a href='https://github.com/ptripathi2002'><img src={navIcon2} alt="Github" /></a> 
                </div>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" >
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
                    <Tab.Pane eventKey="second">
                      <p>Still Woking to get it filled</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Still Woking to get it filled</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
             
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
