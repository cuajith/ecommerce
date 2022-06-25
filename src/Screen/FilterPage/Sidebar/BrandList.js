import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const BrandList = () => {
  const data = [
    { brandName: "Redmi" },
    { brandName: "OnePlus" },
    { brandName: "Samsung" },
    { brandName: "boAt" },
    { brandName: "MI" },
    { brandName: "realme" },
    { brandName: "Noise" },
  ];
  return (
    <div className="brand">
      <Typography className="brand-head">Brands</Typography>
      {data.map((brand) => (
        <FormGroup>
          <div className="brandname">
            <FormControlLabel control={<Checkbox />} label="" />
            <Typography className="brandname-label">
              {brand.brandName}
            </Typography>
          </div>
        </FormGroup>
      ))}
    </div>
  );
};

export default BrandList;
