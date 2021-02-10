import React from 'react';
import logo from '../waitwhattext.png';
import { Nav, Navbar, NavDropdown, Row, Col,  } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <Row>
                <Navbar>
                    <Col className='justify-content-left' md={4}>
                    </Col>
                    <Col md={4}>
                        <Navbar.Brand className='justify-content-center'>
                            <img
                            alt='“Wait, what?” is at the root of all understanding.'
                            src={logo}
                            width='80%'
                            height='50%'
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col className='justify-content-right' md={4}>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ml-auto'>
                                <NavDropdown title='Music' id='basic-nav-dropdown'>
                                    <NavDropdown.Item href='#music/original'>Our Music</NavDropdown.Item>
                                    <NavDropdown.Item href='#music/resources'>Resources</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#merch'>Merch</Nav.Link>
                                <Nav.Link href='#bio'>Bio</Nav.Link>
                                <Nav.Link href='#pressKit'>Press Kit</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Row>
       
        );
    }
}

export default NavBar;