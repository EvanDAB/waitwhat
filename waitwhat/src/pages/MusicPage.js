import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Feed from 'react-instagram-authless-feed';
import MusicPlayer from '../components/MusicPlayer';
import MixPlayer from '../components/MixPlayer';

class MusicPage extends React.Component {
    render() {
        return (
            <div id='music-page'>
                <Row id='music-mixes-section'>
                    <Col sm={12}>
                    <h1 className='text-center'>Music</h1>
                    </Col>
                    
                    <Col sm={12} md={6}>
                        <h4 className='text-center'>Original Releases and Remixes</h4>
                        <MusicPlayer />
                    </Col>
                    <Col sm={12} md={6}>
                        <h4 className='text-center'>Mixes</h4>
                        <MixPlayer />
                    </Col>
                </Row>
                <Row id='video-section'>
                  <Col id='music-video'>
                    <h4 className='text-center'>Music Video</h4>
                    <ResponsiveEmbed aspectRatio='16by9'>
                        <iframe src="https://www.youtube.com/embed/EtzXluKcwSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                  </Col>
                  <Col id='live-sets'>
                    <h4 className='text-center'>Live Sets</h4>
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