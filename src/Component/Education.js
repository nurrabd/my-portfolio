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
                                src={require('../image/work.png')}
                                alt={"exp"}
                                width=""
                                height=""
                                Style="margin-left:7px; margin-left: -27px"/>
                        </Col>
                        <Col className="col-11" Style="text-align: left; border:; font-family: Myanmar MN; font-size: 25px; top:9px;">
                            EXPERIENCE
                        </Col>
                    </Row>
                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2>Bachelor thesis</h2>
                            <h5>Front Edge IT</h5>
                            <p>The goal of the  thesis was to create a cloud-based web application that generates a CV for  employee</p>
                            <p>April 2019 – June 2019</p>
                        </Col>
                    </Row>

                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2 Style="color: #000000">Car fitter & Forklift driver</h2>
                            <h5>Volvo Cars</h5>
                            <p>Employed by the staffing company Lernia as a fitter at Volvo Cars. Tasks included high-speed work, forklift driving and team collaboration.</p>
                            <p>June 2015 – Present</p>
                        </Col>
                    </Row>

                    <Row Style="border:">
                        <Col className="col-1" Style="border:">
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 3px;  height: 190px;"></div>
                        </Col >
                        <Col className="col-11" Style="border:; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; ">
                            <h2>Youth leader</h2>
                            <h5>Göteborgs Stad</h5>
                            <p>Provide an opportunity for social development and create a welcoming, fun and enthusiastic environment for youth</p>
                            <p>January 2015 – June 2016</p>
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
