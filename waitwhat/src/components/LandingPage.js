import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';

class LandingPage extends React.Component {
    render() {
        return (
            <div id='landing-page-container'>
                <Row id='music-videos-section'>
                    <Col>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe width="441" height="248" src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col></Col>
                </Row>
                <Row id='image-gallery'>
                    <Col></Col>
                </Row>
                <Row id='social-section'>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row id='sign-up-section'>
                <Col></Col>
                </Row>
            </div>
        );
    }
}

export default LandingPage;