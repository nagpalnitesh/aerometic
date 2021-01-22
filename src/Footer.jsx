import React from "react";

const Footer = () => {
    return(
        <>
        <div className="row frow" id="footer">
                    <div className="col-md-4">
                    <h2>About Us</h2>
                    <p>Aerometic Care is full of new energy and approach to the manufacturing process. We work
in products like Perfumes, Aerosol Products, Cosmetics, Home Care Products, Personal
Care Products. We have Advanced and Sophisticated manufactu</p>
                    <p>At Aerometic we make products in the categories
which are mentioned below.
1. PERFUMES: Parfum, Eau de Toilette, Eau de Cologne, After Shave.
2. AEROSOLS: Deodorants, Body Spray, Air Fresheners, Disinfectant Spray.
3. PERSONAL CARE: Moisturizing cream, Face Wash, Soaps, Shower & Bath Gel, Lotions, Hand 		
			
Wash, Hand Sanitizer.
4. HAIR CARE: Various Shampoo, Hair Oils, Hair Conditioner.</p>
                </div>
                <div className="col-md-2">
                    <h2>Quick Guide</h2>
                    <ul className="footertxt">
                        <li><a href="./Home.jsx">Home</a></li>
                        <li><a href="./Home.jsx">Products</a></li>
                        <li><a href="./Home.jsx">About Us</a></li>
                        <li><a href="./Home.jsx">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h2>Products</h2>
                    <ul className="footertxt">
                        <li><a href="./Home.jsx">Home</a></li>
                        <li><a href="./Home.jsx">Products</a></li>
                        <li><a href="./Home.jsx">About Us</a></li>
                        <li><a href="./Home.jsx">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Contact Us</h2>
                    <ul className="footertxt1">
                        <li><a href="./ContactUs.jsx">XYZ, India</a></li>
                        <li><a href="./ContactUs.jsx">contact@aerometiccare.com</a></li>
                        <li><a href="./ContactUs.jsx">+91-0123456789</a></li>
                    </ul>
                    <hr/>
                    <h2>Social Media</h2>
                    <ul className="footertxt2">
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './facebook.png'} alt=""/></a></li>
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './instagram.png'} alt=""/></a></li>
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './twitter.png'} alt=""/></a></li>
                    </ul>
                </div>
            <div className="col-md-12">
                <p>Made with Love pixXmo</p>
            </div>
        </div>
        </>
    );
};

export default Footer;