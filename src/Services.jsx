import React from "react";
import Logo from "./logo.png";
import "./scroll";
import "./pro";
import Spray from "./icons/spray.png"
import Navbar from "./Navbar";
import Contract from "./icons/contract.png";
import Manufacturing from "./icons/manufacturing.png";
import Research from "./icons/research.png";
import Consult from "./icons/consultation.png";
import Pan_India from "./icons/india.png";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="container-fluid about">
        <div className="services1">
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
        <h1>Private Label</h1>
        <hr />
        <p>At Aerometic we've got an insatiable thirst for innovation and perfection. Each product that is manufactured is
        validated by our experience in Research & Development (R&D). The manufacturing process is also aided by
        our knowledge about recent formulations, product quality control, and quality assurance by our efficient and
        experienced in-house team. What started off with a few products, is now an enormous bank of product across all
        categories and products in many phases, from formulations right all the way down to packaging and personal
        labeling. We tend to additionally undertake private labeling to supply packaging and branding to
        the specifications of our customers. Packaging choices include aluminum can, tin can, glass bottles,
        plastic bottles, jars, cylinders, drum, tubes, pouches, sachets, and cartons of each feasible form and
        size. Needless to mention, our product bank is a veritable boon for customers requiring a whole product
and branding solution at the optimum time and cost.</p>
        <h2>COST OF PRIVATE LABELING PRODUCTION</h2>
        <h3>MINIMUM ORDER QUANTITIES</h3>
        <hr />
        <p>With an intent to provide the ultimate experience, we offer only premier quality packaging material developed
        at advanced hi-tech facilities. These have set batch sizes that are considered as Minimum Order
Quantities. This is specifically to ensure we are supplying only the top quality packaging for the products.</p>
        <h3>IN HOUSE DESIGN STUDIO</h3>
        <hr />
        <p>We exhibit a prolific design expertise with our in-house team of creative geniuses having experience of
        decades in the industry. Our designers have consistently earned applause for developing revolutionary
        product designs par excellence and regulations; which exclusively suit the respective market trends of
the ever evolving beauty industry.</p>
        <h3>SHIPPING</h3>
        <hr />
        <p>We strive to ascertain delivery within slated time frame, depending on the geographics of export.</p>
      </div>
    </>
  );
}

export default Services;