import React from "react";
import Navbar from "./Navbar";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="container-fluid about">
        <h1 style={{ textAlign: 'center' }}>About US</h1>
        <p style={{ textAlign: 'justify', padding: '1em 2em 1em 2em' }}>
          Aerometic Care is full of new energy and approach to the manufacturing process. We work in products like Perfumes, Aerosol Products, Cosmetics, Home Care Products, Personal Care Products. We have Advanced and Sophisticated manufacturing facilities that embrace Fully Automatic Machines to achieve Fast and Accurate production. And Manual Machines to make specially hand-crafted and artistic limited-edition products. We are known for our expertise not solely as a contract manufacturer, but also for the research and development to the world of those products, we offer a one stop sourcing solution to bring your product from concept to retail. Aerometic can assist you turn your ideas into successful retail brands which will become market place winners utilizing our several services. At Aerometic we make products in the categorieswhich are mentioned below.
          <ul className="prolist">
            <li><span>PERFUMES:</span> Parfum, Eau de Toilette, Eau de Cologne, After Shave.</li>
            <li><span>AEROSOLS:</span> Deodorants, Body Spray, Air Fresheners, Disinfectant Spray.</li>
            <li><span>PERSONAL CARE:</span> Moisturizing cream, Face Wash, Soaps, Shower & Bath Gel, Lotions, Hand Wash, Hand Sanitizer.</li>
            <li><span>HAIR CARE:</span> Various Shampoo, Hair Oils, Hair Conditioner.</li>
          </ul>
        </p>
        <h2 style={{ overflow: 'hidden' }}>Our Location & Benefits:</h2>
        <p>
          - Aerometic Care is located at the heart of the new industrial revolution place at Sanand, Ahmedabad,
          surrounded by the giant units like Coca-Cola, Tata Motors, Nivea, Voltas Beko, Ford, Posco, Chemco,
          Bosch, General Motors, etc.
          - We are located at Sanand, Ahmedabad, 45 Km from the AHMEDABAD INTERNATIONAL AIRPORT.
          - Our establishment is 330 Km from the MUNDRA PORT, GUJARAT.
          - And 580 Km from the NHAVA SHEVA PORT, MUMBAI.
          - We have the advantage of 3 leading aluminium aerosol can manufacturers around us in the same city.
          - Vadodara/Surat is the hub for the glass bottle for the cosmetic segment.
        </p>
      </div>
    </>
  );
};

export default About;