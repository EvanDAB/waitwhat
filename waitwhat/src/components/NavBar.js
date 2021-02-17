import React from 'react';
import logo from '../waitwhattext.png';
import { Nav, Navbar, NavDropdown, Row, Col,  } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from './LandingPage';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.routerRef = React.createRef();
        this.navbarRef = React.createRef();
    }
    render() {
        return (
            <BrowserRouter ref={this.routerRef}>
                <Row id='navbar-band'>
                    <Navbar ref={this.navbarRef}>
                        <Col className='justify-content-left' md={4}>
                        </Col>
                        <Col md={4}>
                            <Navbar.Brand className='justify-content-center' href=''>
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
                <Switch>
                    <Route exact path='' component={LandingPage}/>
                </Switch>
            </BrowserRouter>
            
       
        );
    }
}

export default NavBar;