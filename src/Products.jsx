import React from "react";
import "./pro";
import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import aerosol from "./products/APCL2.jpg";
import personal from "./products/IMG7.jpg";
import fragnance from "./products/APCL221.jpg";
import homecar from "./products/APCL10.jpg";

const Products = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />

      <div className="conatiner-fluid contnt">
        <Carousel controls={false} className="carousel">
          <Carousel.Item>
            <div className="row homeslide">
              <div className="col-6 cartxt">
                <h1>Aerosol</h1>
                <h4>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h4>
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
                <h4>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h4>
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
                <h4>Our cutting edge factory can produce high quality bespoke fragrances in desired volume. This high level of personalisation can contribute infinitely towards your branding goals or event. Our unambiguously limited production runs can  accommodate large scale events, corporate gifting, retail outlet or weddings, complete with individually tailored scent, gift boxing or packaging.</h4>
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
                <h4>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h4>
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

      <Footer />
    </>
  );
};

export default Products;