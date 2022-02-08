
{/* Trending old coding */}

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

        {/* css code
        .gridbox{
    display: flex;
    flex-direction: row;
    background-color: rgba( 255, 255, 255, 0.1 );
    margin: 20px 0px;
}
.progrid{
    margin: 20px;
    background: #ecf0f1;
    height: 320px;
    text-align: center;
    width: 320px;
    border-radius: 12px;
    box-shadow: 1px -1px 6px #000000 ;
    margin-left: 40px;
    cursor: pointer;
}
.progrid h1{
    font-size: 25px;
    font-family: 'spantaran';
    font-weight: 900;
    color: #000000;
    margin-top: 17px;
    padding: 8px 0px;
}
.progridcontainer{
    width: 95%;
    display: flex;
    height: 80%;
    flex-wrap: wrap;
    justify-content: center;
}
.progridcontainer img{
    height: 100px;
    margin: 10px;
    width: 120px;
    margin-left: 20px;
}
.progridcontainer h3{
    width: 120px;
    height: 100px;
    font-size: 18px;
    font-weight: bold;
    padding-top: 30px;
    margin: 10px;
    text-align: center;
    background: rgb(150,0,150);
    color: #ffffff;
    margin-left: 20px;
}
.progridcontainer h3:hover{
    color: #0033ef;
    cursor: pointer;
    border-bottom: #0033ef;
}
.Itemcard{
    color: #ffffff;
}
 */}