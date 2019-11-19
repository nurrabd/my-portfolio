import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Col} from 'react-bootstrap'
import {Link} from "react-scroll/modules";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="/"  > <div className="fas fa-code fa-2x  border-danger" Style="width:"></div> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-left">
                        <Link href="https://resume.io/r/6BznlicoZ" Style="padding-left:900px">Resume</Link>
                        <Link

                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className=" border-danger"
                            Style="padding-left:20px; align-text:center"

                        >projects</Link>
                        <Link

                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
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
