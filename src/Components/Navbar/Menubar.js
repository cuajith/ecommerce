import React, { useState } from 'react'
import { Navbar, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Menubar.css"
import Autocomplete from "./Autocomplete/Autocomplete";
import Login from "./Login/Login"
import Language from './Language/Language';

const Menubar = () => {

    const [state, setState] = useState({
        menu: false,
        isOpen: false,
        homeLinkClass: "nav-item nav-link",
        aboutLinkClass: "nav-item nav-link",
        menuClass: ""
    });
    const [color, setColor] = useState();
    const toggleMenu = () => {
        setState({
            ...state,
            menu: !state.menu
        });
    };
    const changeColor = (e)=>{
      setColor({bgColor:"red"})
    }

    const toggleOpen = () => setState({ ...state, isOpen: !state.isOpen });

    const show = state.menu ? "show" : "";
    const menuClass = `dropdown-menu${state.isOpen ? " show" : ""}`;

    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-primary">

                <Link className=' logoanim menutoggle' to="/">
                    <img src='./images/logo.jpg' />
                    <i className="gg-move-down"></i>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={"collapse navbar-collapse " + show}>
                    <div className="navbar-nav">
                        <Link
                            className="App"
                            to="/"
                            onClick={() =>
                                state.homeLinkClass === "nav-item nav-link"
                                    ? "nav-item nav-link active"
                                    : "nav-item nav-link"
                            }
                        >
                            <Autocomplete />
                        </Link>
                        <Link
                            className="shop-link"
                            to="/about"
                            onClick={() =>
                                state.aboutLinkClass === "nav-item nav-link"
                                    ? "nav-item nav-link active"
                                    : "nav-item nav-link"
                            }
                        >
                            Corporate Store
                        </Link>
                        <Link
                            className="Login"
                            to="/"
                            onClick={() =>
                                state.aboutLinkClass === "nav-item nav-link"
                                    ? "nav-item nav-link active"
                                    : "nav-item nav-link"
                            }
                        >
                            <Login />
                        </Link>

                        <Link
                            className="cart"
                            to="/cart"
                            onClick={() =>
                                state.aboutLinkClass === "nav-item nav-link"
                                    ? "nav-item nav-link active"
                                    : "nav-item nav-link"
                            }
                        >
                            <i class="fal fa-shopping-cart"></i><span className="cart-span">Cart</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className='menubar-contact'>
                <h2 className='sidebar-heading'>Whole Sale Market</h2>
                <hr/>
                <div className="wishlist">
                    <p>wishlist</p>
                    <i class="fal fa-heart" onClick={changeColor}></i>
                </div><hr/>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" data-toggle="collapse">Mens Fashion
                        <div class="triangle-right"></div>
                        <ul className="sidebarlist-dropdown">
                            <li className="sidebarlist-dropdown-items"><a href="#">Mens Wear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#" >Men Accessories</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Men Footwear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Ethnic Wear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Vests</a></li>
                        </ul></a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Womens
                        <div class="triangle-right"></div>
                        <ul className="sidebarlist-dropdown">
                            <li className="sidebarlist-dropdown-items"><a href="#">Mens Wear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#" >Men Accessories</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Men Footwear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Ethnic Wear</a></li>
                            <li className="sidebarlist-dropdown-items"><a href="#">Vests</a></li>
                        </ul></a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Jewellery & Accessories</a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Beauty & Health</a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Bags & Footwear</a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Home & Kitchen</a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Kids</a>
                </div>
                <div className='mens-fashion'>

                    <a className="sidebar-dropdown" href="#" >Electronics</a>
                </div>
            </div>
        </div>
        
    );
}

export default Menubar

