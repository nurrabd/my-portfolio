import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";
import HeadLines from "../Component/HeadLines";
import Profile from "../Component/Profile";
import Experience from "../Component/Experience";
import Education from "../Component/Education";
import Skills from "../Component/Skills";
import Interests from "../Component/Interests";
import Certifications from "../Component/Certifications";

class Contents extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="col-3" Style={"border:; "}>
                        <HeadLines></HeadLines>
                        </Col>
                        <Col className="col-9" Style={"border:"}>
                            <Profile />
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
