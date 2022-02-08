import React, { useState } from 'react';
 
import Slider from "react-slick";
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
function Bloglist() {
 
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: '50px' // set center padding
  };
 
  const [settings, setSettings] = useState(config);
 
  const products = [
    {
      img: './images/img2.jpg',
      title: 'demo1',
      text: 'my own text with minimal brief'
    },
    {
      img: './images/img2.jpg',
      title: 'Eget est lorem',
      text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
      img: './images/img2.jpg',
      title: 'Tempus imperdiet',
      text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
      img: './images/img2.jpg',
      title: 'Mattis rhoncus',
      text: 'Bibendum neque egestas congue quisque.'
    },
    {
      img: './images/img2.jpg',
      title: 'Odio ut enim',
      text: 'Mattis rhoncus urna neque viverra justo.'
    }
  ]
 
  return (
    <div> 
      <Slider {...settings}>
        {products.map((x, i) => {
          return <div key="{i}" className="img-card">
            <img className="img" src={x.img} alt={x.title}/>
            <div className="card-body">
              <div className="card-title">{x.title}</div>
              <div className="card-text">{x.text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}
 
export default Bloglist;