import React, { Component } from "react";
import Slider from "react-slick";
import './Autoplaycarousel.css'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return (
            
            <div className="autoplay-carousel">
                       <h3 className="best-deals">Best Deals</h3>
                <Slider {...settings}>
                    
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/hp.jpg" /></a>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/iApple.jpg" /></a>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/mensfashion.jpg" /></a>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/printer.jpg" /></a>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/watch.jpeg" /></a>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/shirt.jpg" /></a>
                    </div>
                </Slider>
            </div>
        );
    }
}