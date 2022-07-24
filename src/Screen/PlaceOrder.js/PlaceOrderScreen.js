import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Services/shared/Message";
import CheckoutStep from "../../Services/shared/CheckoutStep";
import { createOrder } from "../../Redux/actions/orderAction";
import { Typography } from "@material-ui/core";
import "../../styles/PlaceOrder.css";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //function for deciaml
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        payment: cart.payment,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [navigate, success]);

  return (
    <>
      <CheckoutStep step1 step2 step3 step4 />
      <Container>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Typography className="placeorder-head">Shipping</Typography>
                <p>
                  <strong className="strong-text">Address:</strong>
                  {cart.shippingAddress.address}&nbsp;
                  {cart.shippingAddress.city}&nbsp;
                  {cart.shippingAddress.postalcode}&nbsp;
                  {cart.shippingAddress.country}&nbsp;
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Typography className="placeorder-head">
                  Payment Method
                </Typography>
                <p>
                  <strong className="strong-text">{cart.payment}</strong>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Typography className="placeorder-head">Order Items</Typography>
                {cart.cartItems.length === 0 ? (
                  <Message>Your Cart is Empty</Message>
                ) : (
                  <ListGroup variant="">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image src={item.image} alt={item.name} fluid />
                          </Col>
                          <Col>
                            <Typography className="order-items-name">
                              <Link
                                to={`/product/${item.product}`}
                                className="order-items-name-link"
                              >
                                {item.name}
                              </Link>
                            </Typography>
                          </Col>
                          <Col md={4}>
                            <Typography className="order-amount">
                              <div className="order-amount-simplify1">
                                {item.qty} x ₹{item.price}
                              </div>{" "}
                              =
                              <div className="order-amount-simplify2">
                                ₹{item.qty * item.price}
                              </div>
                            </Typography>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card className="order-summary-card">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Typography className="order-summary">
                    Order Summary
                  </Typography>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="order-summary-container">
                    <Row className="order-summary-rows">
                      <Col>Items</Col>
                      <Col>₹{cart.itemsPrice}</Col>
                    </Row>
                    <Row className="order-summary-rows">
                      <Col>Shipping</Col>
                      <Col>₹{cart.shippingPrice}</Col>
                    </Row>
                    <Row className="order-summary-rows">
                      <Col>Tax</Col>
                      <Col>₹{cart.taxPrice}</Col>
                    </Row>
                    <Row className="order-summary-rows">
                      <Col>Total</Col>
                      <Col>₹{cart.totalPrice}</Col>
                    </Row>
                  </div>
                </ListGroup.Item>

                {error && <Message variant="danger">{error}</Message>}

                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;
