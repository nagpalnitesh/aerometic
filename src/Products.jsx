import React from "react";
import Navbar from "./Navbar";
import ProductImg from "./pro.png"

const Products = () => {
  return (
    <>
      <Navbar />
      <div id="products" className="container-fluid products">
        <div className="circle">
          <img className="proimg" src="./logo.png" alt="" />
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="protxt">
          <span>Aerosol</span>
        </div>
        <div className="protxt">
          <span>Perfumes</span>
        </div>
        <div className="protxt">
          <span>Personal Care</span>
        </div>
        <div className="protxt">
          <span>Home Care</span>
        </div>
        <div className="protxt">
          <span>Packaging</span>
        </div>
      </div>
    </>
  );
};

export default Products;