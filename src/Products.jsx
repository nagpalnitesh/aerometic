import React from "react";
import "./prod";
const Products =() => {
  return (
    <>
      <div id="products" className="container-fluid">
        <div className="row">
          <div className="col-md-3 list">
            <li><span id="btn1">Product1</span></li>
            <li><span id="btn2">Product2</span></li>
            <li><span id="btn3">Product3</span></li>
            <li><span id="btn4">Product4</span></li>
          </div>
          <div className="col-md-6 pro prod">
            <a href="./Home.jsx" className="prologo">
              <img src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
            </a>
            <h1 id="active" className="prod1">
              Hello Product1
            </h1>
            <h1 id="active1" className="prod1">
              Hello Product2
            </h1>
            <h1 id="active2" className="prod1">
              Hello Product3
            </h1>
            <h1 id="active3" className="prod1">
              Hello Product4
            </h1>
            <h1 id="active4" className="prod1">
              Hello Product5
            </h1>
            <h1 id="active5" className="prod1">
              Hello Product6
            </h1>
            <h1 id="active6" className="prod1">
              Hello Product7
            </h1>
            <h1 id="active7" className="prod1">
              Hello Product8
            </h1>
          </div>
          <div className="col-md-3 list">
            <li><span id="btn5">Product5</span></li>
            <li><span id="btn6">Product6</span></li>
            <li><span id="btn7">Product7</span></li>
            <li><span id="btn8">Product8</span></li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;