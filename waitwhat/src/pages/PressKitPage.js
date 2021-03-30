import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';

class PressKitPage extends React.Component {
    render(){
        return (
            <div className='press-kit-page'>
                <h2 className='text-center'>
                    “Wait, what?” is at the root of all understanding.
                </h2>
                <ImageGallery/>
            </div>
        )
    }
}

export default PressKitPage;
