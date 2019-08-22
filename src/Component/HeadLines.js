import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";


class HeadLines extends Component {
    render() {
        return (
            <Container>

                <Row Style="height:90px"></Row>
                <Row >
                    <Col className="col-2 ">
                        <img
                        src={require('../image/profile.png')}
                        alt="profile"
                        Style={"border:"}
                        height={"40px"}
                        width={"40px"}
                        />
                    </Col>
                    <Col className="col-10" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        PROFILE
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Exp"}
                            src={require('../image/work.png')}
                            Style={"border:"}
                            height={"40px"}
                            width={"40px"}
                        />
                    </Col>
                    <Col className="col-10" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        EXPERIENCE
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Edu"}
                            src={require('../image/edu.png')}
                            Style={"border:"}
                            height={"40px"}
                            width={"40px"}
                        />
                    </Col>
                    <Col className="col-10" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        EDUCATION
                    </Col>
                </Row>
                <br/>
                <Row className="" Style={"border: "}>
                    <Col className="col-2  " Style={"border:  ; " }>
                        <img
                            alt={"Edu"}
                            src={require('../image/skill.png')}
                            Style={"border:"}
                            height={"20px"}
                            width={"20px"}
                        />
                    </Col>
                    <Col className="col-10 align-items-start" Style={"border:  ; font-family: Myanmar MN; font-size: 25px; text-align:left"}>
                        SKILLS
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Edu"}
                            src={require('../image/edu.png')}
                            Style={"border:"}
                            height={"40px"}
                            width={"40px"}
                        />
                    </Col>
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        INTERESTS
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Edu"}
                            src={require('../image/edu.png')}
                            Style={"border:"}
                            height={"40px"}
                            width={"40px"}
                        />
                    </Col>
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        CERTIFICATIONS
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Edu"}
                            src={require('../image/edu.png')}
                            Style={"border:"}
                            height={"40px"}
                            width={"40px"}
                        />
                    </Col>
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>
                        COURSES
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeadLines;
