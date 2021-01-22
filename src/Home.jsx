import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Footer"
const Home = () => {
  return (
    <>
      <div className="txt">
        <video src={process.env.PUBLIC_URL + './Earth.mp4'} autoPlay muted loop className="video"></video>
          <NavLink to="/" className="navbar-brand nav-link logo">
          <img src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
        </NavLink>
        <div className="label" style={{textTransform: 'uppercase'}}>
          <h1>Aerometic</h1>
          <h1>Care</h1>
        </div>
        <Link to="home" className="scroll" smooth={true} spy={true}>Know More</Link>
      </div>
      <section className="container-fluid home" id="home">
        <Navbar />
        <div className="conatiner-fluid contnt">
          <h1>Welcome Homepage</h1>
        </div>
      </section>
    </>
  );
};

export default Home;