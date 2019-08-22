import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            bilden
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        nurhusein Abulkader
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            tele
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Header;
