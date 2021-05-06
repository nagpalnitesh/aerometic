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
import close from "./icons/close.png"

import Info from "./icons/info.svg"

import myVideo from "./loader.mp4"

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 7000);

    var modal = document.getElementById("modaldisp");
    var close = document.getElementById("close");

    close.addEventListener('click', function () {
      modal.style.display = "none";
    })

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
        <section className="modalimg" id="modaldisp">
          <img src={close} alt="" id="close" />
          <h1>Hello World</h1>
        </section>
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
                      <h3>We are a quintessential Manufacturer, Supplier, & Exporter of Aerosols, Toiletries, Cosmetics, Personal Care, Air Fresheners, Home Care Products, and many more. </h3>
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
          <div className="container-fluid company">
            <div className="profile">
              <span>
                <h3>Aerometic Care Pvt. Ltd. is a leading contract manufacturing company based in Ahmedabad, Gujarat. We are fully committed to adding value to all products manufactured by our company with our expertise in quality, product capacity, and resources. We ensure to meet the needs of our valued clients.</h3>
                {/* <img src={Info} alt="" /> */}
                <div className="row box">
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>OUR MISSION</h4>
                      <p>Aerometic Care ensures adaptation to novel standards aided by our modern facilities and with an immaculate approach. We believe in turning your ideas into successful retail brands, synonymous in the global industry, and make you win in the market by utilizing the multitude of our customizable services.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>Quality Oriented Service</h4>
                      <p>We create the best quality products, ensuring absolute purity. Our Aerometic team includes the best contract manufacturers working in a modern state-of-the-art facility along with our highly trained and meticulous design and customer service teams. </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>OUR VISION</h4>
                      <p>We at Aerometic envision regular catering to our client’s needs for world-class hassle-free products, in line with the rising technologies and trends in the global market. Our strong ethical practices place sustainability and corporate responsibility foremost from our governing board to our assembly staff.</p>
                    </div>
                  </div>
                </div>
                <h1>“Aerometic Care Pvt. Ltd. wants to be your Trusted partner for Contract Manufacturing.”</h1>
                <div className="row box1">
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>OUR GEOGRAPHICAL ADVANTAGE</h4>
                      <p>Aerometic Care is located in the heart of the new industrial place at Sanand, Ahmedabad. We are surrounded by giants like Coca-Cola, Tata Motors, Nivea, Ford, Posco, and Bosch to name a few. Sanand is well connected in terms of transportation with the nearest international airport in Ahmedabad and accessibility to Mundra seaport, and Nhava Sheva Port of Mumbai. Moreover, our location makes us nearer to both Vadodara and Surat which are the centers of glass bottle manufacturing for the cosmetic segment.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>PRODUCT DEVELOPMENT</h4>
                      <p>Whether you have a new product idea or you are looking to improvise upon an existing product, Aerometic’s services are what you need. We cater to your definite needs and assist you to launch your product in the market. Aerometic can provide you with a wide range of specialized orders as well as cosmetic products with a focus on quality ingredients and innovative packaging solutions. </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="txt">
                      <h4>FULL-SERVICE CONTRACT MANUFACTURING</h4>
                      <p>Aerometic provides premier Aerosol & Cosmetic products’ contract manufacturing services. Aerosol & Cosmetic contract manufacturing services include custom and stock formulations, exclusive packaging development, design and sourcing for bulk cosmetic filling, product labeling, and kit assembly amongst others. From dedicated product development, regulatory assistance, manufacturing, quality control, packaging with the best technology, we help you throughout the entire process.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txt">
                      <h4>TURNKEY SERVICES</h4>
                      <p>The entire supply chain is managed by Aerometic thus, the client can enjoy a hassle-free experience of the products’ creation till its launch. Your product is as much ours as is yours. You can continue to do what made you successful in the first place—Innovate, Market, and Sell.</p>

                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="txt">
                      <h4>OUR EXPERTS & EXPERTISE</h4>
                      <p>Aerometic comprises experts from across domains with extensive experience in the cosmetic industry, making it the best partner to help you effectuate your vision. As a full-service contract manufacturer for Aerosol and related products, Aerometic boasts of its unique capabilities to sway the market about your product, quickly and effectively. We ensure the highest quality of the manufactured products. Our expertise is in the realm of development, manufacturing, filling, and packaging of Aerosols, sprays, crèmes, lotions, and sticks which are further packed into jars, or bottles, or otherwise. </p>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="conatiner-fluid parallax">
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