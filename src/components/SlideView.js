import React, { Component } from 'react';
import Slider from 'react-slick';

class SlideView extends Component {
    render() {
        let settings = {
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            draggable: true,
            responsive: this.props.responsiveSettings
        }
        return (
            <div className="">
                <Slider {...settings}>
                {this.props.children}
                </Slider>
            </div>
        );
    }
}

export default SlideView;