import React, { Component } from 'react';
import Slider from 'react-slick';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={
            { ...style,
                display: "block",
                background: "#dd6e42",
                borderRadius: 50,
                width:25,
                height:25
            }
        }
        onClick={onClick}
      />
    );
  }


class SlideView extends Component {
    render() {
        let settings = {
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            responsive: this.props.responsiveSettings,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />
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
