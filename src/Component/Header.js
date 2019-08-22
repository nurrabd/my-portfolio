import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Container Style={"border: "}>
                    <Row Style={"border:"}>
                        <Col Style={"border: " }  >
                            <p/>
                            <img
                            src={require('../image/DSC_0497.png')}
                            width={"140px"}
                            height={"140px"}/>
                        </Col>
                    </Row>
                    <Row Style={"border:"}>
                        <Col Style={"border: ; font-family: Myanmar MN; font-size: 30px"}>
                            NURHUSEIN ABDULKADER
                        </Col>
                    </Row>
                    <Row Style={"border:"}>
                        <Col Style={" font-family: Myanmar MN; font-size: 17px ; color: #9B9A9A" }>
                            Computer Engineer Student | Gothenburg, 41838, Sweden | +46722524885
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Header;
