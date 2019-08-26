import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Education extends Component {
    render() {
        return (
            <div>
                <Container Style="border:">

                    <Row Style={"height: 20px"}></Row>
                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <img
                                src={require('../image/edu.png')}
                                alt={"exp"}
                                width=""
                                height=""
                                Style="margin-left:7px; margin-left: -27px"/>
                        </Col>
                        <Col className="col-11" Style="text-align: left; border:; font-family: Myanmar MN; font-size: 25px; top:9px;">
                            EDUCATION
                        </Col>
                    </Row>
                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2>Chalmers University of Technology, Gothenburg</h2>
                            <h5>MASTER OF SCIENCE</h5>
                            <p>Software Engineering and Technology</p>
                            <p>September 2019 – Present</p>
                        </Col>
                    </Row>

                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2 Style="color: #000000">Chalmers University of Technology, Gothenburgr</h2>
                            <h5>Bachelor Degree, 180 H</h5>
                            <p>Computer Engineering</p>
                            <p>August 2016 – June 2019</p>
                        </Col>
                    </Row>

                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2>Hvitfeldtska gymnasiet, Gothenburg</h2>
                            <h5>High school, 2500 points.</h5>
                            <p>Natural Sciences</p>
                            <p>August 2013 – June 2016</p>
                        </Col>
                    </Row>
                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2>Forklift driver</h2>
                            <h5>DHL</h5>
                            <p>Loading trucks with goods</p>
                            <p>January 2016 – June 2016</p>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default Education;
