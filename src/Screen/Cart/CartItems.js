import { Typography } from "@mui/material";
import React from "react";
import "../../styles/cartcontainer.css";
import {useDispatch, useSelector} from "react-redux";
import { decrease, increase, remove } from "../../Redux/action";

const CartItems = ({ id, img, title, price, qty }) => {
 const dispatch = useDispatch();
  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row">
            <div className="col-md-2">
              <img
                src={img}
                className="img-fluid"
                alt="title"
                style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              />
            </div>
            <div className="col-md-2">
              <Typography>{title}</Typography>
              <Typography className="cart-item-price">₹{price}</Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
                className="cart-plus-minus"
                onClick={() => dispatch(remove(id))}
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
            <div className="col-md-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
                className="cart-plus-minus"
                onClick={() => dispatch(increase(id))}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              <Typography className="cart-qty">{qty}</Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
                className="cart-plus-minus"
                onClick={() => dispatch(decrease(id))}
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
