import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";


class HeadLines extends Component {
    render() {
        return (
            <Container>
                <Row Style={"height:70px; "}/>

                <Row className="">
                    <Col className="col-1 ">
                        <img
                        src={require('../image/profile.png')}
                        alt="profile"
                        Style={"border:"}
                        height={"40px"}
                        width={"40px"}
                        />
                    </Col>
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 30px"}>
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
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 30px"}>
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
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 30px"}>
                        EDUCATION
                    </Col>
                </Row>
                <br/>
                <Row className="">
                    <Col className="col-2 ">
                        <img
                            alt={"Edu"}
                            src={require('../image/skill.png')}
                            Style={"border:outset"}
                            height={"30px"}
                            width={"30px"}
                        />
                    </Col>
                    <Col className="col-10 align-items-center" Style={"border: outset; font-family: Myanmar MN; font-size: 30px"}>
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
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 30px"}>
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
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 25px"}>
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
                    <Col className="col-9" Style={"border:; font-family: Myanmar MN; font-size: 30px"}>
                        COURSES
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeadLines;
