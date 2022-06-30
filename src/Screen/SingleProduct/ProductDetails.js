import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/actions/productActions";
import "../../styles/SingleProduct.css";
import { Typography } from "@mui/material";

const ProductDetails = () => {
  const [qty, setQty] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, products, error } = productDetails;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);
  return (
    <Container>
      <Link to="/filter" style={{ textDecoration: "none" }}>
        <h4 className="goback">
          <ArrowBackIcon />
          Go Back
        </h4>{" "}
        <br />
      </Link>
      <Row>
        <Col md={5}>
          <img
            src={products.image}
            alt={products.name}
            variant="top"
            className="single-product-image"
          />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush" className="product-desc">
            <ListGroupItem>
              <h3>{products.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  value={products.rating ? products.rating : ""}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              {products.numReviews} reviews
            </ListGroupItem>
            <ListGroupItem>
              Price: ₹ <span className="product-price">{products.price}</span>
            </ListGroupItem>
            <ListGroupItem>{products.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <div className="add-to-cart-column">
            <ListGroupItem>
              <Row>
                <div className="product-status">
                  <Typography>Status:</Typography>
                  <Typography className="status-result">
                    {products.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Typography>
                </div>
              </Row>
            </ListGroupItem>
            {products.countInStock > 0 && (
              <ListGroupItem>
                <Row>
                  <div className="qty">
                    <Col>Quantity:</Col>
                    <Form.Select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="select-qty"
                    >
                      {[...Array(products.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </Row>
              </ListGroupItem>
            )}
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                onClick={addToCartHandler}
              >
                Add to Cart
              </Button>
            </ListGroupItem>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
