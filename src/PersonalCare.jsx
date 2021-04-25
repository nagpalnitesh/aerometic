import React from "react";
import Navbar from "./Navbar";
import Logo from "./logo.png";
import Spray from "./icons/spray.png";

const PersonalCare = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Navbar />
            <div className="container-fluid about">
                <h1>Personal Care</h1>
                <hr />
                <img src={Logo} />
                <p style={{ paddingLeft: '15em', marginTop: '-12em' }}>AEROMETIC brings unique solutions to THE WORLD OF PERSONAL CARE PRODUCTS.
                When you partner with Aerometic you have the ability to custom manufacture premium personal care products,
                made in a quality-centered manufacturing facility. If you already have a product developed or just an idea, we
                can provide our assistance with a multitude of services. With our expert research & development team and
committed project managers, Aerometic is the one stop solution for all your manufacturing. <br /> <span style={{ fontStyle: 'italic' }}>From Concept to Completion, we also specialize in Personal Care Product Development and Contract
Manufacturing.</span></p>

                <h1>CONTRACT MANUFACTURING COMMITMENT TO OUR CUSTOMERS</h1>
                <hr />
                <p>In addition to our premium stock wholesale and private label products, Aerometic has vast formulation and
                development capabilities in Cosmetic Product Development, Liquid Product Development, Skincare Product
                Development, Hair Care Product Development, Natural Personal Care Products and many more. Our team will
                provide you with a commitment free, no obligation quote and your dedicated account manager can help you
with bulk, private label, or even custom formulation orders.</p>
                <p style={{ fontStyle: 'italic' }}>Aerometic can bring your product from idea to reality.</p>
                <h1>WHY CHOOSE US?</h1>
                <hr />
                <p style={{ fontStyle: 'italic' }}>We create the best quality products, ensuring absolute purity.</p>
                <p>The best contract manufacturers have the quality and purity of your products in mind, and are an essential in
                the personal care product industry. Our Aerometic team includes the best contract manufacturers working in a
                state of the art facility alongwith our highly trained and meticulous design and customer service teams.
                When a client is researching contract manufacturers in search of a partnership, it is crucial to consider multiple
                factors that can collapse your product launch. These factors include increasing costs, slow product development,
                poor customer service, and shipping delays. Finding the best contract manufacturer is crucial for product
                profitability. Aerometic boasts in-depth research and development, premium packaging, exceptional design,
and a quick turn-around. We will get your product wrapped up in no time in the most hassle free experience.</p>
                <h1 style={{ overflow: 'hidden' }}>CUSTOM DEVELOPMENT CAPABILITIES</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Beauty products supplier</span></li>
                            <li><img src={Spray} alt="" /><span>Body Creams</span></li>
                            <li><img src={Spray} alt="" /><span>Body Lotions</span></li>
                            <li><img src={Spray} alt="" /><span>Body Lotion Manufacturer</span></li>
                            <li><img src={Spray} alt="" /><span>Body Moisturizers</span></li>
                            <li><img src={Spray} alt="" /><span>Cosmetic Products Manufacturer</span></li>
                            <li><img src={Spray} alt="" /><span>Cosmetics Supplier</span></li>
                            <li><img src={Spray} alt="" /><span>Face Creams</span></li>
                            <li><img src={Spray} alt="" /><span>Face Moisturizers</span></li>
                            <li><img src={Spray} alt="" /><span>Face Peels</span></li>
                            <li><img src={Spray} alt="" /><span>Hand Creams</span></li>
                            <li><img src={Spray} alt="" /><span>Hand Moisturizers</span></li>
                            <li><img src={Spray} alt="" /><span>Lotions</span></li>
                            <li><img src={Spray} alt="" /><span>Luxury Cosmetics</span></li>
                            <li><img src={Spray} alt="" /><span>Moisturizing Lotions</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Mud Masks</span></li>
                            <li><img src={Spray} alt="" /><span>Night Creams</span></li>
                            <li><img src={Spray} alt="" /><span>Organic Beauty Products</span></li>
                            <li><img src={Spray} alt="" /><span>Organic Cosmetics</span></li>
                            <li><img src={Spray} alt="" /><span>Organic Shampoos</span></li>
                            <li><img src={Spray} alt="" /><span>Organic Skin Care</span></li>
                            <li><img src={Spray} alt="" /><span>Private Label Cosmetics</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Care</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Care Products Manufacturer</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Care Supplier</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Creams</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Serums</span></li>
                            <li><img src={Spray} alt="" /><span>Shampoos</span></li>
                            <li><img src={Spray} alt="" /><span>Shea Butter</span></li>
                            <li><img src={Spray} alt="" /><span>Hand Sanitizer</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Natural Hand Sanitizer</span></li>
                            <li><img src={Spray} alt="" /><span>Essentials Oils</span></li>
                            <li><img src={Spray} alt="" /><span>Argan Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Jojoba Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Olive Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Skin Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Hair Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Beard Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Beard Growth Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Beard Balm</span></li>
                            <li><img src={Spray} alt="" /><span>Beard Wax</span></li>
                            <li><img src={Spray} alt="" /><span>Coconut Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Virgin Coconut Oil</span></li>
                            <li><img src={Spray} alt="" /><span>Moisturizers</span></li>
                            <li><img src={Spray} alt="" /><span>Anti-Bacterial Hand Sanitizer</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalCare;