import "./App.css";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./scroll";

import React from "react";
import Home from "./Home";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Products from "./Products";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return(
    <>
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Redirect to="/"></Redirect>
    </Switch>
    <Products />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App;