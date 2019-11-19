import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";


class HeadLines extends Component {
    render() {
        return (
            <Container Style="position: fixed; top:200px; left: -50px;">

                <Row Style="height:90px"></Row>
                <Row className="justify-content-end">

                    <Col className="col-1 " Style="border:outset">

                        <img
                        src={require('../image/profile.png')}
                        alt="profile"
                        Style={"border: outset"}
                        height={"40px"}
                        width={"40px"}
                        />
                    </Col>
                    <Col className="col-10" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>

                        <Link
                            activeClass="active"
                            to="PROFILE"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        >PROFILE</Link>
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
                            className="btn-outline-light"
                        />
                    </Col>
                    <Col className="col-10" Style={"border:; font-family: Myanmar MN; font-size: 25px;  text-align:left"}>

                        <Link
                            activeClass="active"
                            to="EXPERIENCE"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        >EXPERIENCE</Link>
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
                        <Link
                            activeClass="active"
                            to="EDUCATION"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        >EDUCATION</Link>

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
                            className="btn-outline-light"
                        />
                    </Col>
                    <Col className="col-10 align-items-start" Style={"border:  ; font-family: Myanmar MN; font-size: 25px; text-align:left"}>

                        <Link
                            activeClass="active"
                            to="SKILLS"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        >SKILLS</Link>
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

                        <Link
                            activeClass="active"
                            to="INTERESTS"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        >INTERESTS</Link>
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

                        <Link
                            activeClass="active"
                            to=" CERTIFICATIONS"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="btn-outline-light"
                        > CERTIFICATIONS</Link>
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

                        <Link
                            activeClass="active"
                            to="COURSES"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >COURSES</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeadLines;
