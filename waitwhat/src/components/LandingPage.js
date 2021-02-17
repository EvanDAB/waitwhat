import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import MusicPlayer from './MusicPlayer';

class LandingPage extends React.Component {
    render() {
        return (
            <div id='landing-page-container'>
                <Row id='music-videos-section'>
                    <Col>
                        <ResponsiveEmbed aspectRatio='16by9'>
                            <iframe src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col>
                        <MusicPlayer />
                    </Col>
                </Row>
                <Row id='image-gallery'>
                    <Col></Col>
                </Row>
                <Row id='social-section'>
                    <Col id='instagram'>
                        <InstagramEmbed
                            url='https://www.instagram.com/itswaitwhat/'
                            clientAccessToken='123|456'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </Col>
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