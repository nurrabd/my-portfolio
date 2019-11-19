import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";
import HeadLines from "../ResumeComponent/HeadLines";
import Profile from "../ResumeComponent/Profile";
import Experience from "../ResumeComponent/Experience";
import Education from "../ResumeComponent/Education";
import Skills from "../ResumeComponent/Skills";
import Interests from "../ResumeComponent/Interests";
import Certifications from "../ResumeComponent/Certifications";

class Contents extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="col-3" Style={"border:; "}>
                        <HeadLines></HeadLines>
                        </Col>
                        <Col className="col-9" Style={"border: "}>

                            { <Profile />}
                            <Experience/>
                            <Education/>
                            <Skills/>
                            <Interests/>
                            <Certifications/>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Contents;
