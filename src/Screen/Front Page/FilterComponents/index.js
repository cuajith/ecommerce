import React from "react";
import image3 from "../../../images/img2.jpg";
import image12 from "../../../images/img11.jpg";
import image13 from "../../../images/img12.jpg";
import image14 from "../../../images/img13.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./filter.css";

const data = [
  { img: image3 },
  { img: image12 },
  { img: image13 },
  { img: image14 },
];

const FilteredComponents = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="filter-container">
          <Row>
            <Col xs={12}>
              {data.map((x) => {
                return (
                  <img
                    src={x.img}
                    alt="filteredImages"
                    className="filterImages"
                  />
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FilteredComponents;
