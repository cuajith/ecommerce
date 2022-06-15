import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./App.css";
import Men from "../Categories/Men";
import Form from "react-bootstrap/Form";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">Ecommerce</div>

        <div className="search-box">
          {/* dropdown */}
          <label class="dropdown">
              <div class="dd-button">Select</div>
              <input type="checkbox" class="dd-input" id="test" />
              <ul class="dd-menu">
                <li>
                  <a href="">Men</a>
                  <ul>
                    <li>
                      <Men />
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">All</a>
                </li>
              </ul>
            </label>
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
