import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';

class PressKitPage extends React.Component {
    render(){
        return (
            <div>
                <p>
                    “Wait, what?” is at the root of all understanding.
                </p>
                <ImageGallery/>
            </div>
        )
    }
}

export default PressKitPage;
