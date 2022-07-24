import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <Nav className="justify-content-center pl-2">
        <Nav.Item>
          {step1 ? (
            <LinkContainer to="/signin">
              <Nav.Link>SignIn <span>{">>"}</span></Nav.Link>
            </LinkContainer>
          ) : (
              <Nav.Link disabled>Sign In <span>{">>"}</span></Nav.Link>
           )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            <LinkContainer to="/shipping">
              <Nav.Link>Shipping <span>{">>"}</span></Nav.Link>
            </LinkContainer>
          ) : (
             <Nav.Link disabled>Shipping <span>{">>"}</span></Nav.Link>
           )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <LinkContainer to="/payment">
              <Nav.Link>Payment <span>{">>"}</span></Nav.Link>
            </LinkContainer>
          ) : (
              <Nav.Link disabled>Payment <span>{">>"}</span></Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <LinkContainer to="/placeorder">
              <Nav.Link>Place Order </Nav.Link>
            </LinkContainer>
          ) : (
             <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>
      </Nav>
    </>
  );
};

export default CheckoutStep;
