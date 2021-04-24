import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ProductImg from "./products/aerosol.jpg";

const Products = () => {
  return (
    <>
      <Navbar />
      <div id="products" className="container-fluid products">
        <div className="protxt1">
          <div className="protxt">
            <NavLink to="/aerosol" className="nav-link"><span>Aerosol</span></NavLink>
          </div>
          <img className="aerosol1" src={ProductImg} alt="Aerosol" />
        </div>
        <div className="protxt2">
          <div className="protxt">
            <NavLink to="/perfumes" className="nav-link"><span>Perfumes</span></NavLink>
          </div>
          <img className="aerosol2" src={ProductImg} alt="Aerosol" />
        </div>
        <div className="circlediv">
          <div className="circle">
            <img className="proimg" src="./logo.png" alt="" />
          </div>
        </div>
        <div className="protxt3">
          <div className="protxt">
            <NavLink to="/personalcare" className="nav-link"><span>Personal Care</span></NavLink>
          </div>
          <img className="aerosol3" src={ProductImg} alt="Aerosol" />
        </div>
        <div className="protxt4">
          <div className="protxt">
            <NavLink to="/homecare" className="nav-link"><span>Home Care</span></NavLink>
          </div>
          <img className="aerosol4" src={ProductImg} alt="Aerosol" />
        </div>
        <div className="protxt5">
          <div className="protxt">
            <NavLink to="/packaging" className="nav-link"><span>Packaging</span></NavLink>
          </div>
          <img className="aerosol5" src={ProductImg} alt="Aerosol" />
        </div>
      </div>
    </>
  );
};

export default Products;