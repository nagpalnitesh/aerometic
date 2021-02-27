import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Carousel from "react-bootstrap/Carousel";

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
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '1.jpg'}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '2.jpg'}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '3.jpg'}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
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
                  <p><span>Contract Manufacturing:</span> Production is our job, let us deliver the best quality product to your warehouse on time under the most suitable conditions for you.</p>
                </li>
                <li>
                  <p><span>R&D Studies:</span> our company and the best knowledge of our expert staff in terms of chemistry, aerosol and production know-how to your service and to produce the products you need.</p>
                </li>
                <li>
                  <p><span>Manufacturing:</span> Our state-of-the-art manufacturing units provide a safe environment for the manufacturing of the products and our experts regularly monitor all the production activities.</p>
                </li>
                <li>
                  <p><span>Consultancy:</span> Our manufacturing and operating experience in 60 years; we share with you to create a better management plan and manufacturing processes.</p>
                </li>
                <li>
                  <p><span>Pan India Logistics:</span> Our expert staff contribute both as an informative and as a guide with its transparent operation and understanding that serves the purpose, without cluttering pan india logistics procedure.</p>
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