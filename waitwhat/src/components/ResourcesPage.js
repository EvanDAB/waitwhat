import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';

class ResourcesPage extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>Learn Something New</Col>
                </Row>
                <Row>
                    <Col>
                        <ResponsiveEmbed aspectRatio='16by9'>
                            <iframe src="https://www.youtube.com/embed/IyjlRiNiLBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col>
                        <ResponsiveEmbed aspectRatio='16by9'>
                            <iframe src="https://www.youtube.com/embed/QLYK9mIw9s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ResourcesPage;