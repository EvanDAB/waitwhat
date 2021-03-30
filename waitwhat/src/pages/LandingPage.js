import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import MusicPlayer from '../components/MusicPlayer';
import ImageGallery from '../components/ImageGallery';

class LandingPage extends React.Component {
    render() {
        return (
            <div id='landing-page'>
                <Row id='music-videos-section'>
                    <Col sm={12} md={6}>
                        <ResponsiveEmbed aspectRatio='16by9'>
                            <iframe src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col sm={12} md={6} id='music-player-container'>
                        <MusicPlayer />
                    </Col> 
                </Row>
                <div className='image-gallery-container'><ImageGallery/></div>
                <Row id='social-section'>
                    <Col id='twitter'>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="itswaitwhat"
                            options={{width: '100%', height: 400}}
                        />
                    </Col>
                    <Col>
                        <h4 className='heading-text'>upcoming shows</h4>
                        <p>No Shows scheduled as of now</p>
                        <h4 className='heading-text'>previous shows</h4>
                    </Col>
                </Row>
                <Row id='sign-up-section'>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}

export default LandingPage;