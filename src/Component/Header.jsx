import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Col} from 'react-bootstrap'
import {Link} from "react-scroll/modules";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="back" >
                <Navbar.Brand href="/" Style="font-family: Cursive" >  Nurhusein Abdulkader</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        <a href="https://resume.io/r/6BznlicoZ" Style="padding-left:20px">Resume</a>
                        <Link

                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            className=" border-danger"
                            Style="padding-left:20px; align-text:center"

                        >projects</Link>
                        <Link

                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            className=" border-danger"
                            Style="padding-left:20px; align-text:center"

                        >About Me</Link>
                        <Link

                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className=" border-danger"
                            Style="padding-left:20px; align-text:center"

                        >Contact Me</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
