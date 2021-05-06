import React, { useEffect } from "react";
import Navbar from "./NavbarNew";
import Footer from "./Footer"
import Logo from "./logo.png";
import './otherscroll';
import "./pro";
import Spray from "./icons/spray.png"

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="container-fluid about">
        <h1>About The Company</h1>
        <hr />
        <img className="aboutimg" src={Logo} />
        <p style={{ paddingLeft: '18em', marginTop: '-14em' }}>At Aerometic Care, we envision to regularly cater to our client’s needs with world-class products, in line with the rising technologies and trends in the global market. Our philosophy is to manufacture high-quality, cutting edge high-quality competitive costs for our customers. Our core values include prompt execution with satisfaction besides providing quality products coupled with pertinent solutions and continuously trying to do better. With R&D activities to lead the new developments and being competitive on quality and cost terms, we adhere to strict environmental policies that commit the company to minimize any harmful impacts our business may have on the environment. We strive to work with those suppliers, who are adopted to the positive environmental practices in turn lowering the product cost by reducing wastage of valuable resources.</p>
        <p>Lined with the latest trends, we specialize in Aerosol, Perfumes, Cosmetics, and other contemporary products which range from Home-care to Personal care. With the advent of technology in this field, we felt the need for advanced and sophisticated manufacturing facilities, thus embracing them to create a fast but accurate production line. We also have the conventional machines to aid our extremely talented and trained experts to create personalized, limited-edition products.</p>
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
        <h1 style={{ overflow: 'hidden' }}>OUR AMENITIES</h1>
        <hr />
        <p>
          Aerometic Pvt. Ltd. is a leading manufacturer of Aerosols, perfumery, home care, personal care, skin care, industrial care and other related cosmetic products with a great production plan as well as the machinery for perfect results of quality in time. We have an automatic as well as a semi-automatic Aerosol filling and packaging line, whereas an automatic line for perfume as well as other Cosmetics filling. The different manufacturing vessels of various specifications help us to achieve the desired results along with not compromising on its quality. This remarkable production unit is a reflection of the revolutionary & futuristic approach to manufacturing of Aerosol, Cosmetics & Toiletries.
        </p>
        <p>Aerometic is a prodigy of the new Industrial Revolution in the twenty-first century. Every visitor is fascinated to witness this well-equipped space segregated with modernistic filling and sealing lines, extraordinary multi-headed mechanism for deodorants, room freshener, Perfumes, no gas deodorants, sanitizers, disinfectants, Cosmetics lotions, creams, shampoos, jellies, oils, serums, face washes, hand washes, pocket Perfumes, and pen sprays to name a few, amongst hundreds of other products successfully produced every day.</p>
        <h1 style={{ overflow: 'hidden' }}>Mission Philosophy</h1>
        <hr />
        <p>
          The world of manufacturing is transforming, and we at Aerometic ensure we adapt to these new standards with our state-of-the-art facilities and with an immaculate approach. With the advent of technology in this field, we felt the need for advanced and sophisticated manufacturing facilities, thus embracing them to create a fast but accurate production line. Expedited by the various standards we uphold, especially by the R&D team, we offer a curated retail solution to your concepts. You can now turn your ideas into successful retail brands, synonymous in the global industry, and become marketplace winners by utilizing the multitude of our customizable services.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Vision Philosophy</h1>
        <hr />
        <p>
          We at Aerometic envision regular catering to our client’s needs of world-class products, in line with the rising technologies and trends in the global market. We assure prompt execution with satisfaction. Our strong ethical practices place sustainability and corporate responsibility foremost from our governing board to our assembly staff. We strive to make our products inclined with the taste and preference of clients from across the globe, while ensuring they are on par with international standards. Coupled with fast and accurate production and aided by our specially curated R&D team, we at Aerometric can turn your idea into a universally affluent retail brand.
        </p>
        <h1 style={{ overflow: 'hidden' }}>Quality Oriented Services</h1>
        <hr />
        <p>
          We create the best quality products, ensuring absolute purity.  Our Aerometic team includes the best contract manufacturers working in a modern state-of-the-art facility along with our highly trained and meticulous design and customer service teams. Health and safety at work are of prime importance here at Aerometic. Control of risk and prevention of accidents based on a risk assessment method to protect our employees is ensured. We are fully committed to all the relevant Health and Safety legislation and positively implement them in our workspace.  Aerometic boasts in-depth research and development, premium packaging, exceptional design, and a quick turnaround.
        </p>
        <p>Our Quality Service consists of the following process:</p>
        <div className="row">
          <div className="col-md-6">
            <ul className="prolist1">
              <li><img src={Spray} alt="" /><span>Planning and consultation</span></li>
              <li><img src={Spray} alt="" /><span>Project Development</span></li>
              <li><img src={Spray} alt="" /><span>Benchmark analysis</span></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="prolist1">
              <li><img src={Spray} alt="" /><span>Feasibility analysis</span></li>
              <li><img src={Spray} alt="" /><span>Manufacture of samples</span></li>
              <li><img src={Spray} alt="" /><span>Final Production</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;