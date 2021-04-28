import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Carousel from "react-bootstrap/Carousel";
import Contract from "./icons/contract.png";
import Manufacturing from "./icons/manufacturing.png";
import Research from "./icons/research.png";
import Consult from "./icons/consultation.png";
import Pan_India from "./icons/india.png";
import aerosol from "./products/aerosol.jpg";
import personal from "./products/IMG8.jpg";
import fragnance from "./products/IMG11.jpg";
import homecar from "./products/IMG12.jpg";
import "./scroll";
import "./pro";

const Home = () => {
  return (
    <>
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
              <div className="row homeslide">
                <div className="col-6 cartxt">
                  <h1>Aerosol</h1>
                  <ul>
                    <li>1. We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</li>
                    <li>2. Aerometic offers complete, full-service aerosol formulation and packaging capabilities to meet all your customer’s needs.</li>
                    <li>3. one step solution for complete aerosol solution</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="imgslide">
                    <img src={aerosol} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row homeslide">
                <div className="col-6 cartxt">
                  <h1>Personal Care</h1>
                  <ul>
                    <li>1. We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</li>
                    <li>2. Aerometic offers complete, full-service aerosol formulation and packaging capabilities to meet all your customer’s needs.</li>
                    <li>3. one step solution for complete aerosol solution</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="imgslide">
                    <img src={personal} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row homeslide">
                <div className="col-6 cartxt">
                  <h1>Fragrances</h1>
                  <ul>
                    <li>1. Our cutting edge factory can produce high quality bespoke fragrances in desired volume. This high level of personalisation can contribute infinitely towards your branding goals or event. Our unambiguously limited production runs can  accommodate large scale events, corporate gifting, retail outlet or weddings, complete with individually tailored scent, gift boxing or packaging.</li>
                    <li>2. A personal touch, A Signature Scent, Literally.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="imgslide">
                    <img src={fragnance} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row homeslide">
                <div className="col-6 cartxt">
                  <h1>Home Care</h1>
                  <ul>
                    <li>1. We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</li>
                    <li>2. Aerometic offers complete, full-service aerosol formulation and packaging capabilities to meet all your customer’s needs.</li>
                    <li>3. one step solution for complete aerosol solution</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="imgslide">
                    <img src={homecar} alt="" />
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
            <div className="col-md-12 parallax"></div>
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
    </>
  );
};

export default Home;