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
    navigate("/signin");
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const subTotal = cartItems.reduce((acc, item) => acc + item.qty, 0);
  // const data = {
  //   productId: productId,
  //   subTotal: subTotal,
  // };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="cart-screen-page">
            <Typography className="your-cart">Your Cart</Typography>
            {cartItems.length === 0 ? (
              <span>
                Your Cart is Empty ! <Link to="/filter">Go Back</Link>
              </span>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroupItem>
                    <Row className="cart-items-list">
                      <Col>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fluid
                          rounded
                          className="cart-image"
                        />
                      </Col>
                      <Col>
                        <Link
                          to={`/product/${item.product}`}
                          className="product-link"
                        >
                          <Typography className="product-name">
                            {item.name}
                          </Typography>
                        </Link>
                      </Col>
                      <Col>
                        <Typography className="product-price">
                          ₹ {item.price}
                        </Typography>
                      </Col>
                      <Col>
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
                      <Col>
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
        
          <div className="cart-total">
            <ListGroup variant="flash">
              <ListGroupItem className="total-price">
                <h2 className="subtotal-heading">
                  Subtotal ({subTotal}) items
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
       
      </Row>
    </Container>
  );
};

export default CartScreen;
