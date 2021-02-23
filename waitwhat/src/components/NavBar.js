import React from 'react';
import logo from '../content/icons/waitwhattext.png';
import fbLogo from '../content/icons/facebook-logo.png';
import igLogo from '../content/icons/instagram-logo.png';
import twitterLogo from '../content/icons/twitter-logo.png';
import twitchLogo from '../content/icons/twitch-logo.png';
import spotifyLogo from '../content/icons/spotify-logo.png';
import soundcloudLogo from '../content/icons/soundcloud-logo.gif';
import { Nav, Navbar, NavDropdown, Row, Col,  } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import MusicPage from './MusicPage';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.routerRef = React.createRef();
        this.navbarRef = React.createRef();
    }
    render() {
        return (
            <BrowserRouter ref={this.routerRef}>
                <Row id='navbar-container'>
                    <Navbar ref={this.navbarRef}>
                        <Col className='justify-content-right' md={4}>
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav className='mr-auto'>
                                    <NavDropdown title='Music' id='basic-nav-dropdown'>
                                        <LinkContainer to='/music'>
                                            <NavDropdown.Item >Our Music</NavDropdown.Item>
                                        </LinkContainer> 
                                        <LinkContainer to='/resources'>
                                            <NavDropdown.Item>Resources</NavDropdown.Item>
                                        </LinkContainer>  
                                    </NavDropdown>
                                    <Nav.Link href='#merch'>Merch</Nav.Link>
                                    <Nav.Link href='#bio'>Bio</Nav.Link>
                                    <Nav.Link href='#pressKit'>Press Kit</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col>
                            <LinkContainer to='' >
                                <Navbar.Brand className='justify-content-center' href=''>
                                    <img
                                    alt='“Wait, what?” is at the root of all understanding.'
                                    src={logo}
                                    width='80%'
                                    height='50%'
                                    />
                                </Navbar.Brand>
                            </LinkContainer>
                        </Col>
                        <Col className='justify-content-left' md={4}>
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav className='ml-auto'>
                                    <Nav.Link  href='https://open.spotify.com/artist/0OkO3dCZRJQlXEy8kTwoox'>
                                        <img className='social-icon' src={spotifyLogo}/>
                                    </Nav.Link>
                                    <Nav.Link href='https://soundcloud.com/itswaitwhat'>
                                        <img className='social-icon' src={soundcloudLogo}/>
                                    </Nav.Link>
                                    <Nav.Link href='https://www.instagram.com/itswaitwhat/'>
                                        <img className='social-icon' src={igLogo}/>
                                    </Nav.Link>
                                    <Nav.Link href='https://twitter.com/itswaitwhat'>
                                        <img className='social-icon' src={twitterLogo}/>
                                    </Nav.Link>
                                    <Nav.Link href='https://www.twitch.tv/itswaitwhat'>
                                        <img className='social-icon' src={twitchLogo}/>
                                    </Nav.Link>
                                    <Nav.Link href='https://www.facebook.com/itswaitwhat'>
                                        <img className='social-icon' src={fbLogo}/>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Navbar>
                </Row>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/music' component={MusicPage}/>
                    {/* <Route exact path='/resources' component={ResourcesPage}/>
                    <Route exact path='/bio' component={BioPage}/>
                    <Route exact path='/press' component={PressKitPage}/> */}
                </Switch>
            </BrowserRouter>
            
       
        );
    }
}

export default NavBar;