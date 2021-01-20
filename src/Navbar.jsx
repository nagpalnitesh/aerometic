import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import "./scroll"
const Navbar = () => {
    return (
        <>
            <div id="myTopnav" className="topnav">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse categories" id="navbarNav">
                        <ul className="navbar-nav menu">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/" className="navbar-brand nav-link logo">
                        <img src={process.env.PUBLIC_URL + './logo_1.png'} alt="logo" />
                    </NavLink>
                    <div className="collapse navbar-collapse categories" id="navbarNav">
                        <ul className="navbar-nav menu1">
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;