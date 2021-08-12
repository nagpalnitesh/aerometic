import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import "./App.css";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./screen/Home/index";
import AboutUs from "./screen/About";
import ContactUs from "./screen/Contact";
import Aerosol from "./screen/Aerosol";
import Services from "./screen/Services";
import PersonalCare from "./screen/PersonalCare";
import HomeCare from "./screen/HomeCare";
import Perfume from "./screen/Perfumes";
import Products from "./screen/Products";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/aerosol" component={Aerosol} />
            <Route exact path="/homecare" component={HomeCare} />
            <Route exact path="/personalcare" component={PersonalCare} />
            <Route exact path="/perfumes" component={Perfume} />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
