import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Carousel from "react-bootstrap/Carousel";

import "./loader.css";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ProHome from "./ProHome"
import "./scroll";
import "./pro";

import Contract from "./icons/contract.png";
import Manufacturing from "./icons/manufacturing.png";
import Research from "./icons/research.png";
import Consult from "./icons/consultation.png";
import Pan_India from "./icons/india.png";
import machine from "./products/APCL6.jpg"
import aerosol from "./products/APCL2.jpg";
import personal from "./products/IMG7.jpg";
import fragnance from "./products/APCL221.jpg";
import homecar from "./products/APCL10.jpg";

import myVideo from "./loader.mp4"

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 7000);

  });
  return (
    <>
      <span className="loader" id="loader">
        <video src={myVideo} autoPlay muted loop className="video"></video>
      </span>
      <span id="main">
        <div className="txt">
          <video src={process.env.PUBLIC_URL + './Earth.mp4'} autoPlay muted loop className="video"></video>
          <NavLink to="/" className="navbar-brand nav-link logo">
            <img src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
          </NavLink>
          <div className="label" style={{ textTransform: 'uppercase' }}>
            {/* <h1>Aerometic</h1> */}
            <h1>Care</h1>
          </div>
          <Link to="home" className="scroll" smooth={true} spy={true}><img src={process.env.PUBLIC_URL + './scroll_wheel.gif'} alt="logo" /></Link>
          <div className="container-fluid">
            <span className="ani">
              <h1><span className="hide">FOR </span>AERO<span className="hide">SOL</span></h1>
            </span>
            <span className="ani1">
              <h1><span className="hide">COS</span>METIC <span className="hide">SERVICES</span></h1>
            </span>
          </div>
        </div>
        <section className="container-fluid home" id="home">
          <Navbar />
          <div className="conatiner-fluid contnt">
            <Carousel controls={false} className="carousel">
              <Carousel.Item>
                <div className="slide">
                  <div className="overlay">
                    <img src={machine} alt="" />
                  </div>
                  <div className="slidetxt">
                    <div className="textmain">
                      <h1>Welcome to Aerometic</h1>
                      <h3>We are a quintessential manufacturer of Aerosols, Toiletries, Cosmetics, Personal Care, Air Fresheners, Home Care Products, and many more. </h3>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slide">
                  <div className="overlay">
                    <img src={aerosol} alt="" />
                  </div>
                  <div className="slidetxt">
                    <div className="textmain">
                      <h1>Prominent Contract Manufacturers with Quality Optimized Solutions</h1>
                      <h3>An all-in-one store for you to find optimal solutions to all your needs. We lead in providing holistic service in contract manufacturing with the best results. </h3>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slide">
                  <div className="overlay">
                    <img src={personal} alt="" />
                  </div>
                  <div className="slidetxt">
                    <div className="textmain">
                      <h1>Excellence in Purveying Premium Quality Products</h1>
                      <h3>Our manufacturing unit spreads across vast stretches of the area and is equipped with the latest machinery that aids in effortlessly delivering exquisite,  premium quality products. </h3>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slide">
                  <div className="overlay">
                    <img src={fragnance} alt="" />
                  </div>
                  <div className="slidetxt">
                    <div className="textmain">
                      <h1>A Great Deal of Experience</h1>
                      <h3>Aerometic Care boasts a wealth of 20 years of experience in Contract Manufacturing in Quality Oriented Wide Range Luxury Products.</h3>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slide">
                  <div className="overlay">
                    <img src={homecar} alt="" />
                  </div>
                  <div className="slidetxt">
                    <div className="textmain">
                      <h1>A Synergy of Profound Research & Promising Innovations</h1>
                      <h3>We are driven by a team of adept R&D wing that excels in making the best use of our in-house, state-of-the-art infrastructure and novel, modern technology for Testing and Solutions.</h3>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="company">
            <div className="row">
              <div className="col-md-12 profile">
                <span>
                  <p>Aerometic Care Pvt Ltd is a leading company in Gujarat. We manufacture products with
                  the international standard, made with keeping the taste and preference of Indian and
                  International markets. Our facility is located among the leading companies of India at
                  Sanand - Ahmedabad, Gujarat.
                  </p>
                  <h3>“Aerometic Care Pvt. Ltd.<br />Wants to be YOUR trusted partner for Contract Manufacturing.”</h3>
                </span>
              </div>
              <div className="col-md-12 parallax">
                <div className="productshome">
                  <ProHome />
                </div>
              </div>
              <div className="col-md-12 services">
                <h1>Our Services</h1>
                <ul>
                  <li>
                    <img src={Contract} alt="" /><p><span>Contract Manufacturing:</span> Production is our job, let us deliver the best quality product to your warehouse on time under the most suitable conditions for you.</p>
                  </li>
                  <li>
                    <img src={Research} alt="" /><p><span>R&D Studies:</span> our company and the best knowledge of our expert staff in terms of chemistry, aerosol and production know-how to your service and to produce the products you need.</p>
                  </li>
                  <li>
                    <img src={Manufacturing} alt="" /><p><span>Manufacturing:</span> Our state-of-the-art manufacturing units provide a safe environment for the manufacturing of the products and our experts regularly monitor all the production activities.</p>
                  </li>
                  <li>
                    <img src={Consult} alt="" /><p><span>Consultancy:</span> Our manufacturing and operating experience in 60 years; we share with you to create a better management plan and manufacturing processes.</p>
                  </li>
                  <li>
                    <img src={Pan_India} alt="" /><p><span>Pan India Logistics:</span> Our expert staff contribute both as an informative and as a guide with its transparent operation and understanding that serves the purpose, without cluttering pan india logistics procedure.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ftextmain">
            <NavLink to="/aboutus" className="flink">
              <div className="ftext">
                START YOUR BRAND JOURNEY WITH US
              <div>START YOUR BRAND JOURNEY WITH US</div>
                <div>START YOUR BRAND JOURNEY WITH US</div>
                <div>START YOUR BRAND JOURNEY WITH US</div>
                <div>START YOUR BRAND JOURNEY WITH US</div>
              </div>
            </NavLink>
          </div>
        </section>
        <Footer />
      </span>
    </>
  );
};