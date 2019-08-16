import React from 'react';
import logo from './logo.svg';
import nur from './nur.jpg';
import {Container, Col, Row} from "react-bootstrap";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Container>
              <Row>
                  <Col className="col-6 border-primary" Style="border: outset" >
                      <h1> Under construction</h1>
                  </Col>
                  <Col className="col-6 border-primary" Style="border: outset">
                      <h1> Nurhusein Abdulkader</h1>
                  </Col>


              </Row>
          </Container>




          <img
          src={logo}
          alt="hej"
          width="33.3333%"
          height="33.3333%"
          />

      </header>
    </div>
  );
}

export default App;
