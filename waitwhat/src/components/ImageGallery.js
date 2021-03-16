import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imgs from './ImageImports';

class ImageGallery extends React.Component {
    state={
        index:0,
        picList: imgs
    }
    onClickNext= () => {
        if (this.state.index + 1 === this.state.picList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    onClickPrevious= () => {
        if (this.state.index - 1 === -1 ){
            this.setState({
                index: this.state.picList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }
    render() {
        console.log(imgs.length);
        console.log(typeof imgs);
        console.log(this.state.picList.length);
        console.log(typeof this.state.picList);
        return (
            <Row id='image-gallery' >
                <Col xs={2} className='justify-content-center'>
                    <button onClick={this.onClickPrevious}> Prev </button>
                </Col>
                <Col xs={8} className='image-gallery-continer'>
                    <img src={this.state.picList[this.state.index]}/>
                </Col>
                <Col xs={2}>
                    <button onClick={this.onClickNext}> Next </button>
                </Col>
            </Row>
        );
    }
}

export default ImageGallery;