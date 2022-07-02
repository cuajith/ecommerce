import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ReactPaginate from "react-paginate";
import "../../../styles/FilterPage.css";

const Main = () => {
  const [multiData, setMultiData] = useState([]);

  useEffect(
    () =>
      axios.get("http://localhost:4000/api/products").then((res) => {
        setMultiData(res.data);
      }),
    []
  );

  const [product, setProduct] = useState(
    multiData.length ? multiData.slice(0, 12) : []
  );
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 6;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = product.length
    ? product.slice(pagesVisited, pagesVisited + productPerPage).map((item) => {
        return (
          <Card style={{ height: "22rem" }}>
            <Link to={`/product/${item._id}`}>
              <Card.Img src={item.image} variant="top" className="product-img" />
            </Link>
            <Card.Body>
              <Link
                to={`/product/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <Card.Title as="div">
                  <strong>{item.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <div className="my-3">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  {item.numReviews} reviews
                </div>
              </Card.Text>
              <Card.Text as="div">₹ {item.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })
    : "";

  const pageCount = Math.ceil(product.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => setProduct(multiData), [multiData]);

  return (
    <div style={{position: "relative"}}>
      <div className="product-style">{displayProducts}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Main;
