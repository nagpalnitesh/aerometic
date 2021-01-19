import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import "./scroll"
const Navbar = () => {
    return (
        <>
            <div id="myTopnav">
                <nav className="navbar navbar-expand-lg navbar-light mx-auto">
                    <NavLink to="/" className="navbar-brand nav-link">
                        <img src={process.env.PUBLIC_URL + './favicon.ico'} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact US</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;