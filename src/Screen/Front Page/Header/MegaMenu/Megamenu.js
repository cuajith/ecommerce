import React, { useState } from "react";
import { NavDropdown, Container, Row, Col, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./megamenu.css";
import data from "../Data/data";
import { Typography } from "@mui/material";

function Megamenu() {
  const [state, setState] = useState(data);
  const filterResult = (catItem) => {
    const result = data.filter((curData) => {
      return curData.category === catItem;
    });
    setState(result);
    console.log(result);
  };
  return (
    <div className="wrapper">
      <NavDropdown
        className="align-text-top"
        title="All"
        id="basic-nav-dropdown"
      >
        <div className="dropdown-content">
          <div className="side-heading">
            {data.map((item) => {
              return (
                <Typography className="category">
                  <NavLink
                    to={item.heading}
                    className="category-link"
                    onClick={() => filterResult(item.heading)}
                  >
                    {item.heading}
                  </NavLink>
                </Typography>
              );
            })}
          </div>
          <div className="sub-options">
            {state.map((subitem) => (
              <Typography>
                {subitem.options.map((x) => {
                  return (
                    <NavLink to={x.suboption} className="category-link">
                      <Typography className="sub-options-style">
                        {x.suboption}
                      </Typography>
                    </NavLink>
                  );
                })}
              </Typography>
            ))}
          </div>
        </div>
      </NavDropdown>
    </div>
  );
}

export default Megamenu;
