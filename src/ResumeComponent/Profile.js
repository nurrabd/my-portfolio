import React, {Component} from 'react';
import {Container, Col, Row, } from "react-bootstrap";

class Profile extends Component {
    render() {
        return (
            <Container id="PROFILE">
                <Row Style={"height: 90px"}></Row>
                <Row>
                    <Col className="col-1" Style={"border: "}>
                        <Row Style={"border: "}>
                            <img
                            src={require('../image/profile.png')}
                            Style="margin-left:7px"
                            />

                        </Row>
                        <Row Style={"border: "}>
                            <div Style="border-left: 1px solid #9B9A9A; margin-left: 25px;  height: 380px;"></div>
                        </Row>

                    </Col>
                    <Col  className="col-10" Style={"border: ; text-align: left; margin-top: 100px; font-family: Myanmar MN; font-size: 17px; color: #9B9A9A"}>
                        <p>

                            My goal is to find a workplace after my degree as a software developer in the first place and contribute with my experiences as a graduated computer engineer. Further my ambition is to never give up and always strive to be flexible, make others happy and willing to cooperate!
                        </p>

                        <img
                        src={require('../image/soc.png')}
                        height={"30%"}
                        width={"50%"}
                        Style="margin-left: 130px; margin-top: 50px"/>

                    </Col>

                </Row>

            </Container>

        );
    }
}

export default Profile;
