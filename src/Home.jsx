import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";


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
        <NavLink to="/" className="scroll">Know More</NavLink>
      </div>
      <section className="container-fluid home">
        <Navbar />
        <div className="conatiner-fluid contnt">
          <h1>Welcome Homepage</h1>
        </div>
      </section>
    </>
  );
};

export default Home;