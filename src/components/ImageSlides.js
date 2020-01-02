import React, { Component } from 'react';
import Slider from 'react-slick';
import best_beginner_biohack_2019 from "../images/best_beginner_biohack_2019.jpg";
import best_google_biohack_2019 from "../images/best_google_biohack_2019.jpg";
import best_hardware_biohack_2019 from "../images/best_hardware_biohack_2019.jpg";
import best_humanitarian_biohack_2019 from "../images/best_humanitarian_biohack_2019.jpg";
import overall_first_biohack_2019 from "../images/overall_first_biohack_2019.jpg";

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


class ImageSlides extends Component {
    constructor(props){
      super(props);
      this.state = {
        settings : {
            speed: 750,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            dots: true
        }
      };
    }
    render() {
      // PLACEHOLDER IMAGES
      // TODO: ADD CORRECT IMAGES AND PROPERLY RESIZE IMAGES
        return (
            <div className="biohack-pictures" >
                <Slider {...this.state.settings}>
                  <div className = "biohack-picture-cont">
                    <img src = {best_beginner_biohack_2019} alt="best_beginner_biohack_2019"/>
                  </div>
                  <div className = "biohack-picture-cont">
                    <img src = {best_google_biohack_2019} alt="best_beginner_biohack_2019"/>
                  </div>
                  <div className = "biohack-picture-cont">
                    <img src = {best_beginner_biohack_2019} alt="best_beginner_biohack_2019"/>
                  </div>
                  <div className = "biohack-picture-cont">
                    <img src = {best_beginner_biohack_2019} alt="best_beginner_biohack_2019"/>
                  </div>
                </Slider>
            </div>
        );
    }
}

export default ImageSlides;
