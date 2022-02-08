import React, { useState } from 'react';
import Slider from "react-slick";

import "./Trending.css"
function Trending() {
 
  const config = {
   
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true, // enable center mode
    centerPadding: '50px' // set center padding
  };
 
  const [settings, setSettings] = useState(config);
 
  const products = [
    {
      img: './images/img1.jpg',
      title: 'Men Accessories',
      text: ''
    },
    {
      img: './images/hp.jpg',
      title: 'Laptop',
      text: ''
    },
    {
      img: './images/img1.jpg',
      title: 'Men Accessories',
      text: ''
    },
    {
      img: './images/img2.jpg',
      title: 'footwear',
      text: ''
    },
    {
      img: './images/img7.jpg',
      title: 'Sunglasses',
      text: ''
    },
    {
      img: './images/img5.jpg',
      title: 'Furniture',
      text: ''
    },
    {
      img: './images/img8.jpg',
      title: 'Beauty',
      text: ''
    },
    {
      img: './images/shirt.jpg',
      title: 'Shirts',
      text: ''
    },
    {
      img: './images/watch.jpeg',
      title: 'Watches',
      text: ''
    },
    {
      img: './images/mensfashion.jpg',
      title: 'Formals',
      text: ''
    }
  ]
 
  return (
    <div className='topoffers'> 
      <h2>Top Offers</h2>
      <Slider {...settings}>
        {products.map((x, i) => {
          return (
          <div key="{i}" className="img-card">
            <img className="img" src={x.img} alt={x.title}/>
            <div className="card-body">
              <div className="card-title">{x.title}</div>
              <div className="card-text">{x.text}</div>
            </div>
          </div>
          )
        })}
      </Slider>
    </div>
  );
}
export default Trending