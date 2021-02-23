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
                        <ResponsiveEmbed>
                            <iframe src="https://youtu.be/IyjlRiNiLBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col>
                        <ResponsiveEmbed>
                        <iframe src="https://youtu.be/QLYK9mIw9s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </div>
        )
    }
}