import React from 'react'

import "../css/footer.css"

const Footer = () => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="fcontent container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>About Us</h2>
                        <p>
                            Aerometic Care Pvt Ltd is a leading company in Ahmedabad, Gujarat. We are contract manufacturer of products with the international standard, made with keeping the taste and preference of Indian and International markets. Our facility is located around the leading companies of India at Sanand - Ahmedabad, Gujarat.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h2>Quick Links</h2>
                        <p>
                            <a href="/">Home</a>
                        </p>
                        <p>
                            <a href="/products">Products</a>
                        </p>
                        <p>
                            <a href="/services">Services</a>
                        </p>
                        <p>
                            <a href="/aboutus">About Us</a>
                        </p>
                        <p>
                            <a href="/contactus">Contact Us</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Contact Us</h2>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> {" "}
                            <a href="https://g.page/aerometic?share">
                                Plot No.: WP-177/178 BOL, SANAND-2 G.I.D.C, Ahmedabad-382110, Gujarat, India.
                            </a>
                        </p>
                        <p>
                            <i className="fas fa-paper-plane"></i>{" "}
                            <a href="mailto:info@aerometic.com">info@aerometic.com</a>
                        </p>
                        <p>
                            <i className="fas fa-phone-alt"></i> {" "}
                            <a href="tel:+91-8460336523">
                                +91-8460336523
                            </a>
                        </p>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <p style={{ textAlign: "center" }}>
                            Made with <i className="fas fa-heart"></i> <a href="https://pixxmo.com">
                                pixXmo
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
