import React, {useEffect} from "react";
import multiData from "../../Data/product";
import "../../styles/cartcontainer.css";
import CartItems from "./CartItems";
import {useDispatch, useSelector} from "react-redux"
import { getCartTotal,clearItems } from "../../Redux/action";
import { Typography } from "@mui/material";

const CartContainer = () => {
    const { cart, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  },[cart])

  if(cart.length === 0) {
    return (
        <Typography>Your Cart is Empty</Typography>
    )
  }

  return (
    <div>
      <h2 className="cart-header">Your Cart</h2>
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4 className="total-amount">
            Total <span>₹ {totalAmount}</span>
          </h4>
        </div>
        <div className="text-center">
          <button
            variant="danger"
            onClick={() => dispatch(clearItems())}
            className="cart-clear-btn"
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </div>
  );
};
export default CartContainer;
