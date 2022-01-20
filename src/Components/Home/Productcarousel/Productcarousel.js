import React, { Component } from 'react'
import Slider from "react-slick";
import './Productcarousel.css'
import Item from './Item'
import data from './Item';

class Productcarousel extends Component {
    render() {
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3
        };
        return (
            <div className='slider-2'>
                <h3>Top Trendings</h3>
                   
                <Slider {...settings}>
                    <div className='display-image'>
                        <img src="https://4.imimg.com/data4/TK/MS/MY-3742194/stylish-sun-glasses-250x250.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Sun glasses</p>
                            <p className='span-rupee'>From $ 100</p>
                        </span>
                    </div>

                    <div className='display-image'>
                        <img src="./images/img1.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Trending Shirts</p>
                            <p className='span-rupee'>From $ 500</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <img src="./images/img2.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Foot wear</p>
                            <p className='span-rupee'>From $ 400</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <img src="./images/img3.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Cosmatics</p>
                            <p className='span-rupee'>From $ 400</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <img src="./images/img4.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Face Wash</p>
                            <p className='span-rupee'>From $ 200</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <img src="./images/img5.jpg" />
                        <span className='product-span'>
                            <p className='span-header'>Furniture</p>
                            <p className='span-rupee'>From $ 800</p>
                        </span>
                    </div>
                    <div className='display-image'>
                        <img src="https://m.media-amazon.com/images/I/518mBg+xQtL._UX679_.jpg" />
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
