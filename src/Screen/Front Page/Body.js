import React from "react";
import Banner from "./banner/Banner";
import FirstCarousel from "./Carousel/FirstCarousel";
import FilteredComponents from "./FilterComponents";

const Body = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "0px 0px"
      }}
    >
      <Banner />
      <FirstCarousel />
      <FilteredComponents />
    </div>
  );
};

export default Body;
