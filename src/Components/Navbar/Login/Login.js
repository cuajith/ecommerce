import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div class="container">
            <a className="login-dropdown" href=" "><i class="fal fa-user"></i>
                <span className="login-span">Login</span>
                <ul className="loginlist-dropdown">
                    <li className="loginlist-dropdown-items">Hello User</li>
                    <li className="loginlist-dropdown-items"><p>To access your account</p></li>
                    <li className="loginlist-dropdown-items"><button><a href="#">Sign Up</a></button></li>
                </ul>
            </a>
        </div>
    );
}
export default Login

