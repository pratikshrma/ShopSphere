import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import SearchForm from "./SearchForm"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <span>Air_Traders.in</span>
                </Link>
                <SearchForm />
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <Link to='/cart'>
                    <li>
                        <div className="cartback">
                        <img src={cart} alt="Cart Image" height="30" className="cartlogo"/>
                        </div>
                    </li>

                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
