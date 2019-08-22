import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";

class Experience extends Component {
    render() {
        return (
            <Container Style="border:">

                <br/>
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
                    <Col className="col-1"Style="border:outset">

                    </Col >
                    <Col className="col-11" Style="border:outset">

                    </Col>
                </Row>

            </Container>

        );
    }
}

export default Experience;
