import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Progress = () => {
  const [value, setValue] = React.useState([2, 10]);
  const rangeSelector = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div>
      <Typography id="range-slider" gutterBottom className="progress-head">
        Price
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        className="slider"
      />
      <div className="price-range">
        <Typography className="min-max">min:</Typography>
        <p class="outer"> {value[0]} /- </p>
      </div>
      <div className="price-range">
        <Typography className="min-max">max:</Typography>
        <p class="outer"> {value[1]} /- </p>
      </div>
    </div>
  );
};

export default Progress;
