import "./App.css";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./scroll";

import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Contactus from "./ContactUs";

const App = () => {
  return(
    <>
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route path='/contact' component={Contactus}/>
      <Redirect to="/"></Redirect>
    </Switch>
    <Footer />
    </>
  )
}

export default App;