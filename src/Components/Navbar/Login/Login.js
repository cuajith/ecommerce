import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  
    return (
        <div className="container">
            <a className="login-dropdown" href=" "><i class="fal fa-user"></i>
                
                <ul className="loginlist-dropdown">
                    <li className="loginlist-dropdown-items">Hello User</li>
                    <li className="loginlist-dropdown-items"><p>To access your account</p></li>
                    <li className="loginlist-dropdown-items"><button><Link to='/register'>Sign Up</Link></button></li>
                </ul>
            </a>
        </div>
    );
}
export default Login
