import React, { Component } from "react";
import Slider from "react-slick";
import './Autoplaycarousel.css'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return (
        <>
            <div className="autoplay-carousel">
                <h3 className="best-deals">Best Deals</h3>
                <hr />
                <Slider {...settings}>

                    <div className="autoplay-images">
                        <a href="#"><img src="./images/hp.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Laptops</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/iApple.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Mobiles</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/mensfashion.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Formals</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/printer.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Printer</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/watch.jpeg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Watches</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>
                    <div className="autoplay-images">
                        <a href="#"><img src="./images/shirt.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Shirts</p>
                            <p className='span-rupee'>10% Off</p>
                        </span>
                    </div>

                </Slider>
                
            </div>
            
        </>
        );
    }
}