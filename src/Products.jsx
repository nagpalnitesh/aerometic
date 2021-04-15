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
          <span>Product1</span>
        </div>
        <div className="protxt">
          <span>Product2</span>
        </div>
        <div className="protxt">
          <span>Product3</span>
        </div>
        <div className="protxt">
          <span>Product4</span>
        </div>
        <div className="protxt">
          <span>Product5</span>
        </div>
      </div>
    </>
  );
};

export default Products;