import React from "react"
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Language.css"

const Language = () => {
    return (
        <div>
            <button className="button">
                <div className="language-align">
                    <img className="india-image" src="./images/india.png" />
                    <span className="language-span">LAN</span>
                    
                </div>
            </button>
            <div className='dropdown-content'>
                <Nav.Link href="#"><NavLink to={'/english'} className="dropdown">ENGLISH - EN</NavLink></Nav.Link>
                <Nav.Link href="#"><NavLink to={'/hindi'} className="dropdown">HINDI - HI</NavLink></Nav.Link>
            </div>
        </div>
    )
}
export default Language

{/*} <img src="./images/india.png" />  */ }