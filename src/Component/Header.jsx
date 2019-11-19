import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="/"  > <div className="fas fa-code fa-4x border border-danger"></div> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                        <Nav.Link href="https://resume.io/r/6BznlicoZ">Resume</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <Nav.Link href="">More deets</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
