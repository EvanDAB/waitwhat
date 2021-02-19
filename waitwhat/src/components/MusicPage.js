import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Feed from 'react-instagram-authless-feed';
import MusicPlayer from './MusicPlayer';

class MusicPage extends React.Component {
    render() {
        return (
            <div id='music-page-container'>
                <Row id='music-mixes-section'>
                    <h1>Music</h1>
                    <Col>
                        <h4>Original Releases and Remixes</h4>
                        <MusicPlayer />
                    </Col>
                    <Col>
                        <h4>Mixes</h4>
                        <p>Enter Mix Stuff Here</p>
                    </Col>
                </Row>
                <Row id='video-section'>
                  <Col id='music-video'>
                    <ResponsiveEmbed aspectRatio='16by9'>
                        <iframe src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                  </Col>
                  <Col id='live-sets'>
                    <ResponsiveEmbed aspectRatio='16by9'>
                        <iframe src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                  </Col>
                </Row>
                <Row id='sign-up-section'>
                <Col></Col>
                </Row>
            </div>
        );
    }
}

export default MusicPage;