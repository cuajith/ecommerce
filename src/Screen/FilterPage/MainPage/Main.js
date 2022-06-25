import React from "react";
import multiData from "../Data/product";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {multiData.map((item) => {
        return (
          <Container style={{ height: "450px" }}>
            <Card style={{ height: "26rem" }}>
              <Link to="/filter">
                <Card.Img
                  src={item.img}
                  variant="top"
                  style={{ height: "15rem" }}
                />
              </Link>
              <Card.Body>
                <Link to="/filter" style={{ textDecoration: "none" }}>
                  <Card.Title as="div">
                    <strong>{item.title}</strong>
                  </Card.Title>
                </Link>

                <Card.Text as="div">₹ {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
};

export default Main;
