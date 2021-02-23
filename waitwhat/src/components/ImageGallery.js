import React from 'react';
import { Col } from 'react-bootstrap';
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
            <div>
                <img src={this.state.picList[this.state.index]}/>
                <button onClick={this.onClickPrevious}> Previous </button>
                <button onClick={this.onClickNext}> Next </button> 
            </div>
        );
    }
}

export default ImageGallery;