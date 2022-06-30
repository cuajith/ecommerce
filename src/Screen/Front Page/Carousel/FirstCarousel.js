import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import multiData from "../../../Data/product";
import filter from "../../../Data/Filter";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="side-arrows" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="side-arrows" />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "270px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const FirstCarousel = () => {
  return (
    <div>
      <span className="or-option">
        {filter.map((x) => {
          return (
            <div className="carousel">
              <h6>{x.carouselName}</h6>
              <Slider {...carouselProperties}>
                {multiData.map((item) => (
                  <Card item={item} />
                ))}
              </Slider>
            </div>
          );
        })}
      </span>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to="/filter">
        <img className="multi__image" src={item.img} alt="" />
      </Link>
      <p className="title">{item.title}</p>
      <p className="price">{item.price}</p>
    </div>
  );
};

export default FirstCarousel;
