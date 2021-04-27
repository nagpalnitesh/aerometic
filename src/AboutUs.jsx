import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "./logo.png";
import './scroll';
import Spray from "./icons/spray.png"

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="container-fluid about">
        <h1>About The Company</h1>
        <hr />
        <img src={Logo} />
        <p style={{ paddingLeft: '15em', marginTop: '-12em' }}>The world of manufacturing is transforming and we at Aerometic ensure we adapt to these new standards with
        our state of the art facilities and with an immaculate approach. Lined with the latest trends we specialize in
        Aerosol, Perfumes, Cosmetics, and other contemporary products which ranges from Home-care to Personal
        care. With the advent of technology in this field, we felt the need for the advanced and sophisticated automated
        manufacturing facilities thus, embraced them to create a fast but accurate production line. We also have the
        conventional machines to aid our extremely talented and trained experts to create personalized, limited-edition
products.</p>
        <p>Aerometic has gained prominence amongst the limited number of contract manufacturers specializing in these
        products. Expedited by the various standards we uphold, especially by the R&D team, we offer a curated retail
        solution to your concepts. You can now turn your ideas into successful retail brands, synonymous in the global
industry and become market-place winners by utilizing the multitude of our customizable services.</p>
        <p>
          You can select from our range of products, some of which are labelled accordingly:
          <ul className="prolist">
            <li><span>PERFUMES:</span> Parfum, Eau de Toilette, Eau de Cologne, After Shave.</li>
            <li><span>AEROSOLS:</span> Deodorants, Body Spray, Air Fresheners, Disinfectant Spray.</li>
            <li><span>PERSONAL CARE:</span> Moisturizing Cream, Face Wash, Soaps, Shower & Bath Gel, Lotions, Hand Wash, Hand
              Sanitizer.
              </li>
            <li><span>HAIR CARE:</span> Hair Oils, Hair Shampoo & Conditioner.</li>
          </ul>
        </p>
        <h1 style={{ overflow: 'hidden' }}>Our Location & Benefits:</h1>
        <hr />
        <p>
          {/* - Aerometic Care is located at the heart of the new industrial revolution place at Sanand, Ahmedabad,
          surrounded by the giant units like Coca-Cola, Tata Motors, Nivea, Voltas Beko, Ford, Posco, Chemco,
          Bosch, General Motors, etc.
          - We are located at Sanand, Ahmedabad, 45 Km from the AHMEDABAD INTERNATIONAL AIRPORT.
          - Our establishment is 330 Km from the MUNDRA PORT, GUJARAT.
          - And 580 Km from the NHAVA SHEVA PORT, MUMBAI.
          - We have the advantage of 3 leading aluminium aerosol can manufacturers around us in the same city.
          - Vadodara/Surat is the hub for the glass bottle for the cosmetic segment. */}
          Aerometic is located in the heart of the new industrial place at Sanand, Ahmedabad. We are surrounded by
giants like Coca-Cola, Tata Motors, Nivea, Voltas Beko, Ford, Posco, Chemco, Bosch and General Motors to
name a few. Sanand is well connected to most of the transportation hubs of the country. We are 45 kms away
from the nearest international airport in Ahmedabad and 330 kms from the Mundra Sea Port. Our establishment
is just 580 km from the Nhava Sheva Port of Mumbai which boasts of some enormous trading capacities.
Moreover, our location makes it advantageous for us due to the presence of 3 of the leading aluminium-Aerosolcan manufacturers in the same city and its proximity to both Vadodara and Surat which are the centers of glass
bottle manufacturing for the cosmetic segment.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Company Philosophy</h1>
        <hr />
        <p>
          {/* - Aerometic Care is located at the heart of the new industrial revolution place at Sanand, Ahmedabad,
          surrounded by the giant units like Coca-Cola, Tata Motors, Nivea, Voltas Beko, Ford, Posco, Chemco,
          Bosch, General Motors, etc.
          - We are located at Sanand, Ahmedabad, 45 Km from the AHMEDABAD INTERNATIONAL AIRPORT.
          - Our establishment is 330 Km from the MUNDRA PORT, GUJARAT.
          - And 580 Km from the NHAVA SHEVA PORT, MUMBAI.
          - We have the advantage of 3 leading aluminium aerosol can manufacturers around us in the same city.
          - Vadodara/Surat is the hub for the glass bottle for the cosmetic segment. */}
          We at Aerometic envision to regularly cater to our clients’ needs with world–class products, in-line with the
rising technologies and trends in the global market. We assure prompt execution with satisfaction. Our
philosophy is to manufacture high quality, cutting edge products at competitive costs for our customers. Our
clients rely on our expertise to deliver customized Aerosol manufacturing solutions for their unique products
and we are dedicated to exceeding our clients’ expectations by providing top quality, lower cost, low
environmental impact, and safe Aerosol products.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Capabilites</h1>
        <hr />
        <p>
          Aerometic comprises of experts from across domains with extensive experience in the cosmetic industry,
          making it the best partner to help you effectuate your vision. As a full-service contract manufacturer for Aerosol
          and related products, Aerometic boasts of their unique capabilities to sway the market about your product,
          quickly and effectively. We ensure of maintaining the highest quality of the manufactured products. Our
          expertise is in the realm of development, manufacturing, filling, and packaging of Aerosols, sprays, crèmes,
          lotions, and sticks which are further packed into jars, or bottles or otherwise.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Product Development</h1>
        <hr />
        <p>
          Whether you have a new product idea or you are looking to improvise upon an existing product, Aerometic’s
          services are what you need. We cater to your definite needs and assist you to launch your product in the market.
          Aerometic can provide you with a wide range of specialized orders as well as cosmetic products with a focus on
          quality ingredients and innovative packaging solutions. Learn more about our processes and our product
          development formulators here.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Full Service Contract Manufacturing</h1>
        <hr />
        <p>
          Aerometic provides premier Aerosol & Cosmetic products’ contract manufacturing services. Aerosol &
          Cosmetic contract manufacturing services include custom and stock formulations, exclusive packaging
          development, design and sourcing for bulk cosmetic filling, product labeling, and kit assembly amongst others.
          From dedicated product development, regulatory assistance, manufacturing, quality control, packaging with the
          best technology, we help you throughout the entire process.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Turnkey Services</h1>
        <hr />
        <p>
          The entire supply chain is managed by Aerometic thus, the client can enjoy a hassle free experience of the
          products’ creation till its launch. Your product is as much ours as is yours. You can continue to do what made
          you successful in the first place—Innovate, Market, and Sell.
        </p>
        <p style={{ fontStyle: 'italic' }, { textAlign: 'center' }}>Aerometic ’s Product Development Team is passionate about your Success around the Globe!</p>
        <p>The entire development team in Aerometic incorporates a passion for providing the services to boost your
        success across the globe, by creating products that may cause a significant impact in the lives of those who use
        them. We have an unfeigned commitment to quality, innovation, learning, and improvement while ensuring that
        we stay acquainted with the trends in the market. The Aerometic ’s Product Development team can assist with
        the various aspects of your product. Our goal is to partner with you to help transition your product from just an
        idea swirling in your head to one that can be swirled around one of our beakers and eventually become a top
selling product in the global market!</p>
        <p>We can assist you with:</p>
        <ul className="prolist">
          <li><img src={Spray} alt="" /><span>Sourcing of raw materials and packaging materials</span></li>
          <li><img src={Spray} alt="" /><span>Formulation of innovative products</span></li>
          <li><img src={Spray} alt="" /><span>Provide the established formulations to use as a starting point</span></li>
          <li><img src={Spray} alt="" /><span>Lab scale samples for your evaluation</span></li>
          <li><img src={Spray} alt="" /><span>Early identification of potential scale-up challenges</span></li>
          <li><img src={Spray} alt="" /><span>Knowledge of the benefits of ingredients in your product</span></li>
        </ul>
        <h1 style={{ overflow: 'hidden' }}>Company Philosophy</h1>
        <hr />
        <p>
          Our Product Development team works very closely with your Technical Manager and Account Specialist to
          help foster a partnership with you. We welcome you to visit our facility to meet our team, take a tour of our
          manufacturing areas, and discuss your brand and product ideas. Together, we can explore many aspects of your
          company and product, inter alia, your specific requisites from us, as your contract manufacturer, your retail and
          regulatory requirements, and your marketing strategy—all to ensure your success in the marketplace.
        </p>
        <p>The first step of the new product development process is to complete one of our comprehensive Product Profile
        Sheets. This will provide us the necessary guidelines and desired product attributes you are looking to achieve
        as well as how your product will be packaged for sale. We will then provide a price estimate for your review
and approval.</p>
        <p>Next, our Product Development team will create samples of your proposed product for evaluation. If any
        challenges or difficulties arise in the development process, our team communicates with you about the
        alternatives in order to come to a mutually agreeable solution. Communication is always timely, honest, and
transparent. Upon final formula approval, the product will begin to move into the first-time production pipelinewhere our Quality and Production teams will take over to finally oversee your new product into its final stages.</p>
        <p style={{ fontStyle: 'italic' }, { textAlign: 'center' }}>We are as invested in the success of your product as you are!</p>
        <p>Quality assurance is defined as: all the planned and systematic activities implemented within the quality system
that can be demonstrated to provide confidence that a product or service will fulfil requirements for quality.</p>
        <p>Quality Assurance guarantees that the activities implemented will ensure that the quality requirements of the
        product and service will be fulfilled. The confidence provided by quality assurance is two-fold, internally to the
        management and externally to the customers. In the spirit of continuous improvement, Aerometic monitors and
        analyses quality related key performance metrics and documents and implements corrective and preventive
        actions, ensuring absolute satisfaction to the customer and the consumers we serve. We also take into
        consideration our customers’ feedback and guarantee reparative measures. We focus on the timely delivering by
deploying of resources and aiming for the continuous improvement on our quality management system.</p>
        <p>Our core values include prompt execution with satisfaction besides providing quality products coupled with
        pertinent solutions and continuously trying to do better. With R&D activities to lead the new developments and
        being competitive on quality and cost terms, we adhere to strict environmental policies that commits the
        company to minimize any harmful impacts our business may have on the environment. We strive to work with
        those suppliers, who are adopted to the positive environmental practices in turn lowering the product cost by
        reducing wastage of valuable resources. Health and safety at work is of prime importance here at Aerometic .
        Control of risk and prevention of accidents based on risk assessment method to protect our employees is
        ensured. We are fully committed to all the relevant Health and Safety legislation and positively implement them
in our workspace.</p>
        <h1>Our Amenities</h1>
        <hr />
        <p>Aerometic Pvt. Ltd. is a leading manufacturer of Aerosols, perfumery, home care, personal care, skin care,
        industrial care and other related cosmetic products with a great production plan as well as the machinery for
        perfect results of quality in time. We have an automatic as well as a semi-automatic Aerosol filling and
        packaging line, whereas an automatic line for perfume as well as other Cosmetics filling. The different
        manufacturing vessels of various specifications help us to achieve the desired results alongwith not
        compromising on its quality. This remarkable production unit is a reflection of the revolutionary & futuristic
approach to manufacturing of Aerosol, Cosmetics & Toiletries.</p>
        <p>Aerometic is a prodigy of the new Industrial Revolution in the twenty-first century. Every visitor is fascinated
        to witness this well-equipped space segregated with modernistic filling and sealing lines, extraordinary multi-
        headed mechanism for deodorants, room freshener, Perfumes, no gas deodorants, sanitizers, disinfectants, Cosmetics lotions, creams, shampoos, jellies, oils, serums, face washes, hand washes, pocket Perfumes, and pen
sprays to name a few, amongst hundreds of other products successfully produced every day.</p>
      </div>
    </>
  );
};

export default About;