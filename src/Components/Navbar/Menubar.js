import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import "./Menubar.css"
import Autocomplete from "./Autocomplete/Autocomplete";
import Login from "./Login/Login"
import Language from './Language/Language';

const Menubar = () => {
    return (
        <div>
            <Navbar bg="#fffff" expand="lg" sticky='top' className="Navbar-style">
                <Container className="glass">
                    <Navbar.Brand >
                        <NavLink to="/" className=' logoanim menutoggle'>

                            <img src='./images/logo.png' />
                            <i class="gg-move-down"></i>

                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#home" ><NavLink to={`/`} className="App"> <Autocomplete /> </NavLink></Nav.Link>
                            <Nav.Link href="#home" ><NavLink to={`/`} className="shop-link"><h3 className='shop'>Shop</h3></NavLink></Nav.Link>
                            <Nav.Link href="#home" ><NavLink to={`/`} className="Login"> <Login /> </NavLink></Nav.Link>
                            <Nav.Link href="#home" ><NavLink to={`/`} className="dropdown"> <Language /> </NavLink></Nav.Link>
                            <Nav.Link href="#home" ><NavLink to={`/`} className="wishlist"> <i class="fal fa-heart"></i></NavLink></Nav.Link>
                            <Nav.Link href="#home" ><NavLink to={`/`} className="cart"> <i class="fal fa-shopping-cart"></i><span className="cart-span">Cart</span></NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className='menubar-contact'>
                <h2 className='sidebar-heading'>Categories</h2>
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

    )
}
export default Menubar

{/*<Navbar bg="#fffff" expand="lg" sticky='top' className="Navbar-style">
                <Container className="glass">
                    <Navbar.Brand >
                        <div className=' logoanim menutoggle'>
                            <img src='./images/logo.png' />
                            <i class="gg-move-down"></i>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className='App'>
                                <Autocomplete />
                            </div>
                            <div className="Login">
                                <Login />
                            </div>
                            <div className='dropdown'>
                                <Language />
                            </div>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className='menubar-contact'>
                
                   <a className="dropdown" href="#" >Mens Fashion</a>
                   <a className="dropdown" href="#" >Womens</a>
                   <a className="dropdown" href="#" >Jewellery & Accessories</a>
                   <a className="dropdown" href="#" >Beauty & Health</a>
                   <a className="dropdown" href="#" >Bags & Footwear</a>
                   <a className="dropdown" href="#" >Home & Kitchen</a>
                   <a className="dropdown" href="#" >Kids</a>
                   <a className="dropdown" href="#" >Electronics</a>
                </div>
    */}