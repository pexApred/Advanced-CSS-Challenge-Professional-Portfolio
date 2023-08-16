import React from "react";
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function About() {
    return (
        <>
            <Accordion defaultKey="0" className="resume" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="header-resume text-center">Resume</Accordion.Header>
                    <Accordion.Body className="body-resume">
                        {/* <FontAwesomeIcon icon={faFile} /> */}
                        <a className="view" href="https://drive.google.com/file/d/14Hv12P0aRlDrRsnVlYmzDRRcBIlaY9IE/view?usp=sharing" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFile} />
                        </a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default About;