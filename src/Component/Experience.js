import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";

class Experience extends Component {
    render() {
        return (
            <Container Style="border:">

                <Row Style={"height: 90px"}></Row>
                <Row Style="border:outset">
                    <Col className="col-1" Style="border:outset">
                        <img
                        src={require('../image/work.png')}
                        alt={"exp"}/>
                    </Col>
                    <Col className="col-11" Style="text-align: left; border:; font-family: Myanmar MN; font-size: 25px;">
                        EXPERIENCE
                    </Col>
                </Row>
                <Row Style="border:outset">
                    <Col className="col-1" Style="border:outset">
                        <div Style="border-left: 1px solid #9B9A9A; margin-left: 25px;  height: 190px;"></div>
                    </Col >
                    <Col className="col-11" Style="border:outset; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; color: #9B9A9A">
                        <h2>Bachelor thesis</h2>
                        <h5>Front Edge IT</h5>
                        <p>The goal of the  thesis was to create a cloud-based web application that generates a CV for  employee</p>
                        <p>April 2019 – June 2019</p>
                    </Col>
                </Row>

                <Row Style="border:outset">
                    <Col className="col-1" Style="border:outset">
                        <div Style="border-left: 1px solid #9B9A9A; margin-left: 25px;  height: 190px;"></div>
                    </Col >
                    <Col className="col-11" Style="border:outset; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; color: #9B9A9A">
                        <h2>Car fitter & Forklift driver</h2>
                        <h5>Volvo Cars</h5>
                        <p>Employed by the staffing company Lernia as a fitter at Volvo Cars. Tasks included high-speed work, forklift driving and team collaboration.</p>
                        <p>June 2015 – Present</p>
                    </Col>
                </Row>
                <Row Style="border:outset">
                    <Col className="col-1" Style="border:outset">
                        <div Style="border-left: 1px solid #9B9A9A; margin-left: 25px;  height: 190px;"></div>
                    </Col >
                    <Col className="col-11" Style="border:outset; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; color: #9B9A9A">
                        <h2>Youth leader</h2>
                        <h5>Göteborgs Stad</h5>
                        <p>Provide an opportunity for social development and create a welcoming, fun and enthusiastic environment for youth</p>
                        <p>January 2015 – June 2016</p>
                    </Col>
                </Row>
                <Row Style="border:outset">
                    <Col className="col-1" Style="border:outset">
                        <div Style="border-left: 1px solid #9B9A9A; margin-left: 25px;  height: 190px;"></div>
                    </Col >
                    <Col className="col-11" Style="border:outset; text-align: left; margin-top: 10px; font-family: Myanmar MN; font-size: 17px; color: #9B9A9A">
                        <h2>Youth leader</h2>
                        <h5>Göteborgs Stad</h5>
                        <p>Provide an opportunity for social development and create a welcoming, fun and enthusiastic environment for youth</p>
                        <p>January 2015 – June 2016</p>
                    </Col>
                </Row>

            </Container>

        );
    }
}

export default Experience;
