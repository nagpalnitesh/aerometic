import React from "react";
import "./pro";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ProductImg from "./products/APCL2.png";
import perfume from "./products/APCL22.png";
import home from "./products/APCL21.png";
import personal from "./products/APCL4.png";
import pack from "./products/APCL14.png";


const Products = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div id="products" className="container-fluid products">
        <div className="protxt1">
          <div className="protxt" id="protxt1">
            <NavLink to="/aerosol" className="nav-link"><span>Aerosol</span></NavLink>
          </div>
          <img id="pro1" className="aerosol1" src={ProductImg} alt="Aerosol" />
        </div>
        <div className="protxt2" >
          <div className="protxt" id="protxt2">
            <NavLink to="/perfumes" className="nav-link"><span>Perfumes</span></NavLink>
          </div>
          <img id="pro2" className="aerosol2" src={perfume} alt="Aerosol" />
        </div>
        <div className="circlediv" id="circle">
          <div className="circle">
            <img className="proimg" src="./logo.png" alt="" />
          </div>
        </div>
        <div className="protxt3">
          <div className="protxt" id="protxt3">
            <NavLink to="/personalcare" className="nav-link"><span>Personal Care</span></NavLink>
          </div>
          <img id="pro3" className="aerosol3" src={personal} alt="Aerosol" />
        </div>
        <div className="protxt4">
          <div className="protxt" id="protxt4">
            <NavLink to="/homecare" className="nav-link"><span>Home Care</span></NavLink>
          </div>
          <img id="pro4" className="aerosol4" src={home} alt="Aerosol" />
        </div>
        <div className="protxt5">
          <div className="protxt" id="protxt5">
            <NavLink to="/packaging" className="nav-link"><span>Packaging</span></NavLink>
          </div>
          <img id="pro5" className="aerosol5" src={pack} alt="Aerosol" />
        </div>
      </div>
    </>
  );
};

export default Products;