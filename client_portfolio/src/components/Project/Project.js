import React from "react";
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function Project() {
    return (
        <Accordion eventKey="0" className="work" id="work" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="work-header text-center">My Work</Accordion.Header>
                <Accordion.Body className="work-body">
                    <Row className="row">
                        <Col className="col" xs={12} sm={6} md={4}>
                            <Card className="card" style={{ width: '25rem' }}>
                                <Card.Img src="../Screenshot 2023-05-09 at 9.04.11 PM.png" className="card-Image-top"
                                    alt="Literacy Lane Website link" style={{ width: '100%', height: 'auto' }} rounded />
                                <Card.Body className="card-body">
                                    <Card.Title>Literacy Lane: Interactive Front-End</Card.Title>
                                    <Button href="https://pexapred.github.io/P1-G7-Literacy-Lane/index.html"
                                        className="btn btn-warning card-text" type="submit" id="code">
                                        <FontAwesomeIcon icon={faBook} style={{ width: '10%', height: 'auto' }} />
                                    </Button>
                                    <Card.Text>
                                        This project underscores my proficiency in using CSS frameworks,
                                        integrating multiple server-side APIs, implementing client-side storage,
                                        and delivering an interactive and responsive UI. It exhibits my commitment
                                        to clean coding practices, clear documentation, and effective team
                                        collaboration, culminating in a successful deployment on GitHub Pages.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col" xs={12} sm={6} md={4}>
                            <Card className="card" style={{ width: '25rem' }}>
                                <Card.Img src="../Screenshot 2023-05-09 at 8.44.44 PM.png" className="card-Image-top"
                                    alt="Literacy Lane Website link" style={{ width: '100%', height: 'auto' }} />
                                <Card.Body className="card-body">
                                    <Card.Title>codeThread: Interactive Full-Stack</Card.Title>
                                    <Button href="https://pacific-inlet-31648.herokuapp.com/" className="btn btn-warning card-text"
                                        type="submit" id="code">
                                        <FontAwesomeIcon icon={faShirt} style={{ width: '14%', height: 'auto' }} />
                                    </Button>
                                    <Card.Text>
                                        This project demonstrates my ability to build a full-stack application using Node.js,
                                        Express.js, Handlebars.js, and MySQL with Sequelize ORM. It includes user authentication,
                                        responsive and polished UI, and adherence to MVC paradigm. The application, deployed on
                                        Heroku, showcases my skills in creating RESTful APIs, managing databases, and protecting
                                        sensitive information with environment variables.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col" xs={12} sm={6} md={4}>
                            <Card className="card" style={{ width: '25rem' }}>
                                <Card.Img src="../Screenshot 2023-07-15 at 1.59.46 PM.png" className="card-Image-top"
                                    alt="Literacy Lane Website link" style={{ width: '100%', height: 'auto' }} />
                                <Card.Body className="card-body">
                                    <Card.Title>journeyVerse: Interactive MERN Stack</Card.Title>
                                    <Button href="https://journeyverse-2c53482d7e17.herokuapp.com/" className="btn btn-warning card-text"
                                        type="submit" id="code">
                                        <FontAwesomeIcon icon={faRoute} style={{ width: '13%', height: 'auto' }} />
                                    </Button>
                                    <Card.Text>
                                        This project demonstrates my ability to design and implement a scalable,
                                        user-focused MERN stack single-page application. It features a MongoDB
                                        database with a GraphQL API and a React front-end. The application is
                                        deployed on Heroku, includes user authentication using JWT, and protects
                                        sensitive information on the server. The project emphasizes collaborative
                                        skills, problem-solving, and the ability to work with real-world data to
                                        solve user-focused problems.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Project;