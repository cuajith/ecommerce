import multiData from "../Data/product";
import * as types from "./constants";

const initialState = {
  totalAmount: 0,
  totalCount: 0,
  cart: multiData,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_ITEMS:
        return {
            ...state
        }

    case types.GET_TOTALS:
      let { totalAmount, totalCount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += qty;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount.toFixed(2));
      return { ...state, totalAmount, totalCount };

    case types.INCREASE:
      let tempCartInc = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCartInc };

    case types.DECREASE:
      let tempCartDec = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCartDec };

    case types.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

      case types.CLEAR_ITEMS:
        return {
            ...state,
            cart: []
        }

    default:
      return state;
  }
};

export default cartReducer;
