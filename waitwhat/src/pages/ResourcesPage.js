import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';

class ResourcesPage extends React.Component {
    render() {
        return (
            <div id='resources-page'> 
                <Row>
                    <Col>
                        <h4 className='text-center'>Learn Something New</h4>
                    </Col>
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
                <Row>
                    <Col>
                        <h4 className='text-center'>Helpful, random production tips (a constant WIP)</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe width="1000px" height="300px" src="https://docs.google.com/document/d/e/2PACX-1vRTiW-SZbouG_rVlKmbV4mm4nLqiJ4wIE8pX1LooUgxj7OcPf5j5zxxFq_hPr6k3gV9MZs2aOw0tVYw/pub?embedded=true"></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className='text-center'>Free samples / loops download</h4>
                        <a href='https://www.toneden.io/itswaitwhat/post/waitwhat-perc-loops'>
                            Placeholder
                        </a>
                    </Col>
                    <Col>
                        <h4 className='text-center'>Free Serum presets download</h4>
                        <p className="text-center">
                            Please send us anything you make with 
                            <a href="https://itswaitwhat.com/files/1044492/waitwhat-preset-pack-vol-1.zip" class=""> these</a>
                            , we'd love to check it out!
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ResourcesPage;