import React, { useEffect } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <div id="myTopnav" className="topnav">
        <nav className="navbar navbar-expand-lg navbar-light" onClick={refreshPage}>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse categories" id="navbarNav">
            <ul className="navbar-nav menu">
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <a href="/" className="navbar-brand nav-link logo">
            <img src={process.env.PUBLIC_URL + "./logo_1.png"} alt="logo" />
          </a>
          <div className="collapse navbar-collapse categories" id="navbarNav">
            <ul className="navbar-nav menu1">
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
