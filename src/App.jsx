import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Products from "./Products";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/about" component= {About}/>
      <Route exact path="/contact" component= {Contact}/>
      <Route exact path="/products" component= {Products}/>
      <Redirect to="/"></Redirect>
    </Switch>
    </>
  )
}

export default App;