import React from "react";
import Navbar from "./Navbar";
import Logo from "./logo.png"

const Packaging = () => {
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
            </div>
        </>
    );
};

export default Packaging;