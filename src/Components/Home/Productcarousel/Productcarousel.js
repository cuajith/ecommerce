import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Productcarousel.css'

class Productcarousel extends Component {
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
            <div className='slider-2'>
                <h3>Trendings</h3>
                <hr />
                <Slider {...settings}>
                    <div className='display-image'>
                        <a href="#"><img src="https://4.imimg.com/data4/TK/MS/MY-3742194/stylish-sun-glasses-250x250.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Sunglasses</p>
                            <p className='span-rupee'>From $ 100</p>
                        </span>
                    </div>

                    <div className='display-image'>
                        <a href="#"><img src="./images/img1.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Trending Shirts</p>
                            <p className='span-rupee'>From $ 500</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <a href="#"><img src="./images/img2.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Foot wear</p>
                            <p className='span-rupee'>From $ 400</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <a href="#"><img src="./images/img3.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Cosmatics</p>
                            <p className='span-rupee'>From $ 400</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <a href="#"><img src="./images/img4.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Face Wash</p>
                            <p className='span-rupee'>From $ 200</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <a href="#"><img src="./images/img5.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Furniture</p>
                            <p className='span-rupee'>From $ 800</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <a href="#"><img src="https://m.media-amazon.com/images/I/518mBg+xQtL._UX679_.jpg" /></a>
                        <span className='product-span'>
                            <p className='span-header'>Glasses</p>
                            <p className='span-rupee'>From $ 200</p>
                        </span>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default Productcarousel
