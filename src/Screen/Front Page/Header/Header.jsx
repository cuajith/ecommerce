import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "../../../styles/Header.css";
import Searchbar from "./Searchbar/Searchbar";
import Megamenu from "./MegaMenu/Megamenu";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/actions/cartAction";
import CartScreen from "../../CartScreen/CartScreen";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <NavLink to="/" className="logo">
            Ecommerce
          </NavLink>
        </div>
        <div className="search-box">
          {/* dropdown */}
          <Megamenu />
          <Searchbar />
        </div>
        <ul>
          <li>
            <Badge badgeContent={cartItems.length} color="primary">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              
            </Badge>
            <ul>
              <li>
                <CartScreen />
              </li>
            </ul>
          </li>
          <li>
            
            <a href=""><PermIdentityIcon className="icon-style" /></a>
          </li>
        </ul>
        <label for="check" class="bar">
          <span class="fa fa-bars" id="bars"></span>
          <span class="fa fa-times" id="times"></span>
        </label>
      </nav>
    </>
  );
};

export default Header;
