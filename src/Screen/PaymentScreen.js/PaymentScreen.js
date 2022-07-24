import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { savePayment } from "../../Redux/actions/cartAction";
import CheckoutStep from "../../Services/shared/CheckoutStep";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/PaymentScreen.css";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <div className="payment-screen">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend" className="label-head">
              Select Payment Method
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="payment-type"
              />
              <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="payment-type"
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary" className="btn-block">
            Continue
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PaymentScreen;
