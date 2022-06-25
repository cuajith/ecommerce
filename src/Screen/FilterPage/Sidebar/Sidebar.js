import React from "react";
import Row from "react-bootstrap/Row";
import Sortby from "./Sortby";
import BrandList from "./BrandList";
import "./Sidebar.css"
import Progress from "./Progress";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Row>
          <Sortby/>
        </Row>
        <Row>
          <BrandList/>
        </Row>
        <Row>
          <Progress/>
        </Row>
      </div>
    </>
  );
};

export default Sidebar;
