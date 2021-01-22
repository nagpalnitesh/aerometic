import React from "react";
import "./prod";
const Products =() => {
  return (
    <>
      <div id="products" className="container-fluid">
        <div className="row">
          <div className="col-md-3 list">
            <li id="btn1">Product1</li>
            <li id="btn2">Product2</li>
            <li id="btn3">Product3</li>
            <li id="btn4">Product4</li>
          </div>
          <div className="col-md-6 pro prod">
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
            <li id="btn5">Product5</li>
            <li id="btn6">Product6</li>
            <li id="btn7">Product7</li>
            <li id="btn8">Product8</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;