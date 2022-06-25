import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./App.css";
import Searchbar from "./Searchbar";
import Megamenu from "./MegaMenu/Megamenu";
import { NavLink } from "react-router-dom";

const Header = () => {
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
        <ol>
          <li>
            <ShoppingCartOutlinedIcon className="icon-style" />
            <a href="">cart</a>
          </li>
          <li>
            <PermIdentityIcon className="icon-style" />
            <a href="">Login</a>
          </li>
        </ol>
        <label for="check" class="bar">
          <span class="fa fa-bars" id="bars"></span>
          <span class="fa fa-times" id="times"></span>
        </label>
      </nav>
    </>
  );
};

export default Header;
