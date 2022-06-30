import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../Redux/actions/cartAction";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Typography } from "@mui/material";
import "../../styles/CartScreen.css";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    navigate("/shipping");
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  return (
    <Container>
      <Row>
        <Col md={9}>
          <div className="cart-screen-page">
            <Typography className="your-cart">Your Shopping Cart</Typography>
            {cartItems.length === 0 ? (
              <span>
                Your Cart is Empty ! <Link to="/filter">Go Back</Link>
              </span>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroupItem>
                    <Row className="cart-items-list">
                      <Col md={2}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fluid
                          rounded
                          className="cart-image"
                        />
                      </Col>
                      <Col md={2}>
                        <Link
                          to={`/product/${item.product}`}
                          className="product-link"
                        >
                          <Typography className="product-name">
                            {item.name}
                          </Typography>
                        </Link>
                      </Col>
                      <Col md={2}>
                        <Typography className="product-name">
                          ₹ {item.price}
                        </Typography>
                      </Col>
                      <Col md={2}>
                        <Form.Select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                          className="cart-select-option"
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={1}>
                        <DeleteOutlineIcon
                          onClick={() => removeFromCartHandler(item.product)}
                          className="delete-cart"
                        />
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </div>
        </Col>
        <Col md={3}>
          <div className="cart-total">
            <ListGroup variant="flash">
              <ListGroupItem className="total-price">
                <h2 className="subtotal-heading">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                <Typography className="subtotal-amount">
                  ₹
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </Typography>
              </ListGroupItem>
              <div className="text-center">
                <Button
                  type="button"
                  className="proceed-to-checkout"
                  disabled={cartItems.length === 0}
                  onClick={checkout}
                >
                  Proceed to checkout
                </Button>
              </div>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
