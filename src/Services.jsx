import React from "react";
import "./scroll";
//import "./pro";
import Spray from "./icons/spray.png";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Contract from "./icons/contract.png";
import Manufacturing from "./icons/manufacturing.png";
import Research from "./icons/research.png";
import Consult from "./icons/consultation.png";
import Pan_India from "./icons/india.png";
import Private from "./products/APCL9.jpg";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="container-fluid about">
        <div className="services1">
          <h1>" Aerometic ’s Product Development Team is passionate about your Success <br /> around the Globe! "</h1>
          <h4>The entire development team in Aerometic incorporates a passion for providing the services to boost your success across the globe, by creating products that may cause a significant impact in the lives of those who use them. We have an unfeigned commitment to quality, innovation, learning, and improvement while ensuring that we stay acquainted with the trends in the market. The Aerometic ’s Product Development team can assist with the various aspects of your product. Our goal is to partner with you to help transition your product from just an idea swirling in your head to one that can be swirled around one of our beakers and eventually become a top-selling product in the global market!</h4>
          <h3>We can assist you with:</h3>
          <ul>
            <li>
              <img src={Spray} alt="" /><p>Sourcing of raw materials and packaging materials</p>
            </li>
            <li>
              <img src={Spray} alt="" /><p>Formulation of innovative products</p>
            </li>
            <li>
              <img src={Spray} alt="" /><p>Provide the established formulations to use as a starting point</p>
            </li>
            <li>
              <img src={Spray} alt="" /><p>Lab-scale samples for your evaluation</p>
            </li>
            <li>
              <img src={Spray} alt="" /><p>Early identification of potential scale-up challenges</p>
            </li>
            <li>
              <img src={Spray} alt="" /><p>Knowledge of the benefits of ingredients in your product</p>
            </li>
          </ul>
        </div>
        <div className="servicetxt">
          <p>Our Product Development team works very closely with your Technical Manager and Account Specialist to help foster a partnership with you. We welcome you to visit our facility to meet our team, take a tour of our manufacturing areas, and discuss your brand and product ideas. Together, we can explore many aspects of your company and product, inter alia, your specific requisites from us, as your contract manufacturer, your retail and regulatory requirements, and your marketing strategy—all to ensure your success in the marketplace.</p>
          <p>The first step of the new product development process is to complete one of our comprehensive Product Profile Sheets. This will provide us the necessary guidelines and desired product attributes you are looking to achieve as well as how your product will be packaged for sale. We will then provide a price estimate for your review and approval.</p>
          <p>Next, our Product Development team will create samples of your proposed product for evaluation. If any challenges or difficulties arise in the development process, our team communicates with you about the alternatives to come to a mutually agreeable solution. Communication is always timely, honest, and transparent. Upon final formula approval, the product will begin to move into the first-time production pipeline where our Quality and Production teams will take over to finally oversee your new product into its final stages.</p>
          <h2>FILLING FACILITY</h2>
          <p>At Aerometic we have an all-inclusive quality control lab facility to ensure that the quality of the products we produce are verified and accepted in-house. Quality check is mandatorily done for every process: from raw materials to finished products and packaging, to ensure compliance with laid down specifications. We ensure that our products are on par with the Good Manufacturing Practices (GMP) guidelines and maintain the highest levels of quality and consistency in each product we produce.</p>
          <h2>PRINTING FACILITY</h2>
          <p>At Aerometic, we have the facility to provide screen printing for the printing of flat and rounded bottles. We use the latest European equipment and technology which results in high quality printing and provides distinctive, contemporary, and a refreshing appearance to the final product. </p>
          <h2>PACKING FACILITY</h2>
          <p>Our fully automated packing unit is the final stage before shipping the products to our esteemed customers worldwide. Quality control and careful inspection is applied at this stage to ensure that the products reach the shelves and then our end consumers in immaculate condition.</p>
          <h2>MIXING FACILITY</h2>
          <p>The mixing process is the heart of the perfume manufacturing unit. The entire mixing process is fully computerized and operated with compliance of all the sophisticated health & safety procedures.</p>
          <h2>DEODORANT LINES FACILITY</h2>
          <p>Our state of the art Deodorant filling Station is capable of producing about 15 million bottles per year. All our Deo-Spray bottles are weighed automatically to ensure that we abide by the highest quality in international industry standards.</p>
          <h2>GIFTING GESTURE SETS</h2>
          <p>Gift sets are a perfect way to strengthen bonds with everyone you care about. Regardless of the occasion, choosing the ideal gift set makes a complete difference and shows that the organization appreciates the work of the people involved in running the business and their hard work. At Aerometic Care, our gift sets arrive in different styles, sizes, and packaging. We have a varied choice range from Corporate Gift Sets, Wedding Gift Sets & Customized Gifts Sets. </p>
          <h1>Quality Assurance</h1>
          <h3>We are as invested in the success of your product as you are!</h3>
          <p>Quality assurance is defined as all the planned and systematic activities implemented within the quality system that can be demonstrated to provide confidence that a product or service will fulfill requirements for quality.</p>
          <p>Quality Assurance guarantees that the activities implemented will ensure that the quality requirements of the product and service will be fulfilled. The confidence provided by quality assurance is two-fold, internally to the management and externally to the customers. In the spirit of continuous improvement, Aerometic monitors and analyses quality-related key performance metrics and documents and implements corrective and preventive actions, ensuring absolute satisfaction to the customer and the consumers we serve. We also take into consideration our customers’ feedback and guarantee reparative measures. We focus on timely delivery by deploying resources and aiming for continuous improvement on our quality management system.</p>
        </div>
        <div className="processtxt">
          <div className="row">
            <div className="col-md-4">
              <div className="pbox">
                <h2>Branding</h2>
                <h3>Concept Design Development</h3>
                <p>Concept and Design Development requires unlimited imagination and up-to-date creativity. From a basic idea into an inspiring brand, Aerometic works tirelessly to come out with the most fascinating designs. Aerometic  works on its clients’ ideas separately and offers complete assistance to each client and each project. Our modern production and operations allow us to deliver fast and customized products according to your needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pbox">
                <h2>Formulation</h2>
                <h3>Innovative  Formulation</h3>
                <p>Using the latest trending and newly discovered formulations in the perfumery and cosmetic products world, select a formulation from our private label product catalog, label it under your own brand and sell it. Since a private label product comes ready-made, you don’t need to invest in cosmetic and perfumery development and regulatory compliance. You enjoy a lower product cost, higher profit margin, and shorter delivery times.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pbox">
                <h2>Packaging</h2>
                <h3>Packaging Development</h3>
                <p>We recognize the importance of having a great packaging design to make a great first impression. Premium packaging is a vital way to engage consumers while shopping and go on to build long-lasting brand loyalty. Design is a key component of competitive advantage and that’s why it’s one of our priorities. Moreover, we provide our clients with the latest innovations in the world of cosmetics and fragrances. We work with reliable partners to produce quality scents and exclusive packaging.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pbox">
                <h2>Certificates</h2>
                <h3>Certifications & Quality Standards</h3>
                <p>At Aerometic, regulation is strictly adhered to and controlled in order to meet legal requirements set by industry standards and also to conform to specific regulations of our customers throughout the world. In accordance with Turkish and European laws, our products are not tested on animals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pbox">
                <h2>Testing</h2>
                <h3>Testing & Compatibility</h3>
                <p>All the necessary time and attention are given to the raw materials used in the conception and manufacturing of our products while respecting the standards and current regulations of the Perfumery and Cosmetics field. We conduct multiple testing to prevent the happening of any unwanted interaction between materials and components. We also perform different compatibility tests specifically prepared for each manufactured product. All of our products necessarily pass strict quality inspection standards for ensuring products’ efficiency and durability.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pbox">
                <h2>Production</h2>
                <h3>Manufacturing Facilities</h3>
                <p>Aerometic has an efficient production system with fully and semi-automated machines that reduce the lead time to the minimum possible, to provide competitive fast-to-market products. We have also established a strict quality system to ensure that every product has first-class quality.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="pbox">
                <h2>Logistics</h2>
                <h3>Logistics Support</h3>
                <p>Aerometic ensures all the aspects of producing and shipping the custom products for its final destination. During this process, our team is one call away to help you and support you in every possible way. Whether the new company needs better equipment or staff training, Aerometic brings in its experienced members to guide and counsel. We are at our clients’ complete disposal to find the best solutions and give you the service you expect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;