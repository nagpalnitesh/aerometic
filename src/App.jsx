import "./App.css";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Contactus from "./ContactUs";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Services from "./Services";
import Aerosol from "./Aerosol";
import PersonalCare from "./PersonalCare";
import Perfumes from "./Perfumes";
import Packaging from "./Packaging";
import HomeCare from "./HomeCare";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/products' component={Products} />
        <Route path='/services' component={Services} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/aerosol' component={Aerosol} />
        <Route path="/perfumes" component={Perfumes} />
        <Route path="/homecare" component={HomeCare} />
        <Route path="/personalcare" component={PersonalCare} />
        <Route path="/packaging" component={Packaging} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  )
}

export default App;