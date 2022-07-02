import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Sortby = () => {
  const data = [
    { name: "Featured" },
    { name: "Price: Low to High" },
    { name: "Price: High to Low" },
    { name: "Avg. Customer Review" },
    { name: "Newest Arrivals" },
  ];
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div className="sortby">
        <Typography className="sortby-head">Sort by</Typography>
        <div className="filter-button-option">
          {data.map((x) => (
            <Button variant="outlined" size="small">
              {x.name}
            </Button>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Sortby;
