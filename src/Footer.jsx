import React from "react";

const Footer = () => {
    return(
        <>
        <div className="row frow" id="footer">
                    <div className="col-md-4">
                    <h2>About Us</h2>
                    <p>Aerometic Care Pvt Ltd is a leading company in Ahmedabad, Gujarat. We are contract manufacturer of products with
the international standard, made with keeping the taste and preference of Indian and International markets. Our facility is located around the leading companies of India at Sanand - Ahmedabad, Gujarat.</p>
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
                        <li><img src={process.env.PUBLIC_URL + './loc_1.gif'} alt="location"/><a href="https://goo.gl/maps/Hw8EjKZT61SEyWAF7" target={"_blank"}>Plot No. : WP-177/178, BOL SANAND -2 G.I.D.C, <br/> <span>AHMEDABAD -382110, GUJARAT, INDIA.</span></a></li>
                        <li><img src={process.env.PUBLIC_URL + './mail.gif'} alt="location"/><a href="./ContactUs.jsx">info@aerometic.com</a></li>
                        <li><img src={process.env.PUBLIC_URL + './phone.gif'} alt="location"/><a href="./ContactUs.jsx">+91-8460336523</a></li>
                    </ul>
                    <hr/>
                    <h2>Social Media</h2>
                    <ul className="footertxt2">
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './Whatsapp.png'} alt=""/></a></li>
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './facebook.png'} alt=""/></a></li>
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './instagram.png'} alt=""/></a></li>
                        <li><a href="./ContactUs.jsx"><img src={process.env.PUBLIC_URL + './twitter.png'} alt=""/></a></li>
                    </ul>
                </div>
            <div className="col-md-12">
                <p>Made with &#9825; pixXmo</p>
            </div>
        </div>
        </>
    );
};

export default Footer;