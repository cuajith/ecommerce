import React from "react";
import { Row, Col } from "react-bootstrap";
import Sortby from "./Sortby";
import BrandList from "./BrandList";
import "../../../styles/FilterPage.css";
import Progress from "./Progress";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Row>
          <Sortby />
        </Row>
        <Row>
          <BrandList />
        </Row>
        <Row>
          <Progress />
        </Row>
      </div>
    </>
  );
};

export default Sidebar;
