import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={logo} alt="Shopping Logo" height="60" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <Link to='/cart'>
                    <li>
                        <img src={cart} alt="Cart Image" height="30"/>
                    </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
