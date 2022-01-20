import React from 'react'
import Slider from "react-slick";
import "./Trending.css"
import data from './data';

const Trending = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return (
        data.productData.map((item, index) => {
            return (
                <>
                 <Slider {...settings}>
                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <a href="#"><img src={item.img}/></a>
                         <a href="#"><img src={item.img}/></a>
                         <a href="#"><img src={item.img}/></a>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>
                </Slider>
                </>
            )
        }))
}

export default Trending

{/*  return (
        data.productData.map((item, index) => {
            return (
                <>
                 <Slider {...settings}>
                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>

                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                     <div className='progridcontainer'>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <img src={item.img}/>
                         <h3>More</h3>
                     </div>
                    </div>
                </div>
                </Slider>
                </>
            )
        }))*/}