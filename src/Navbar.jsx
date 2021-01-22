import React from "react";
import "./navbar.css";
import "./scroll";
import { Link } from "react-scroll";

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
                                <Link className="nav-link" to="home" smooth={true} spy={true}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="products" className="nav-link" smooth={true} spy={true}>Products</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="/" className="navbar-brand nav-link logo">
                        <img src={process.env.PUBLIC_URL + './logo_1.png'} alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse categories" id="navbarNav">
                        <ul className="navbar-nav menu1">
                            <li className="nav-item">
                                <Link to="about" className="nav-link" smooth={true} spy={true}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" className="nav-link" smooth={true} spy={true}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;