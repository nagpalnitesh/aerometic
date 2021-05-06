import React from "react";
import Navbar from "./Navbar";
import HomeIMG from "./products/IMG12.jpg";
import Spray from "./icons/spray.png";
//import "./pro";

const HomeCare = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Navbar />
            <div className="container-fluid about">
                <h1 style={{ fontSize: '3em' }}>Home Care Products</h1>
                <hr />
                <img src={HomeIMG} />
                <p style={{ paddingLeft: '32em', marginTop: '-23em' }}>AEROMETIC brings unique solutions to the world of HOME CARE PRODUCTS.
                Aerometic has extensive and immaculate experience with manufacturing and packaging of home care products
                of a wide range in our fully equipped facility. Globally, consumers are concerned about the performance of
                these products while those being sustainable. We ensure that our products lead to the least possible
                environmental damage and are cruelty free. We seek to make your everyday life easier by our innovative
                thinking. We take extensive care from what goes into our products to the way we package them, in order to not
                just reduce the environmental footprint but also assure that they are affordable, effective, and kinder to the end
                user. The products in the household cleaners’ segment are subdivided into surface cleaners, glass cleaners, and
specialty cleaners.</p>
                <p style={{ marginTop: '2em' }}>
                    We have enlisted Home Care products in these few categories:
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Household Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Laundry Care</span></li>
                            <li><img src={Spray} alt="" /><span>Dishwashing</span></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>WC Care</span></li>
                            <li><img src={Spray} alt="" /><span>Air Care</span></li>
                            <li><img src={Spray} alt="" /><span>Car Cleaner</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <h1 style={{ overflow: 'hidden' }}>OUR PRODUCT RANGES:</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Kitchen Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Bathroom Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Scouring Creams (Cream Cleaners)</span></li>
                            <li><img src={Spray} alt="" /><span>Fabric Softner (Regular and Concentrated)</span></li>
                            <li><img src={Spray} alt="" /><span>Bathroom Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>All-purpose Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Bleach</span></li>
                            <li><img src={Spray} alt="" /><span>Furniture Care and Polish Sprays (Liquid)</span></li>
                            <li><img src={Spray} alt="" /><span>Stainless Steel Cleaners
                            </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Laundry Liquids </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Perfumed Capsules</span></li>
                            <li><img src={Spray} alt="" /><span>
                                Hand Dishwashing Liquid
                            </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Car Multipurpose Cleaners
                            </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Toilet Cleaners with or without Bleach</span></li>
                            <li><img src={Spray} alt="" /><span>Car Window Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Fridge Odour Absorber</span></li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Degreasers (Regular & Extra Power)</span></li>
                            <li><img src={Spray} alt="" /><span>Wooden Floor & Furniture Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Ultra Thick Bleach</span></li>
                            <li><img src={Spray} alt="" /><span>Fabric Disinfectant</span></li>
                            <li><img src={Spray} alt="" /><span>Degreasers with Marseille Soap </span></li>
                            <li><img src={Spray} alt="" /><span>Hard Surface Cleaners (with or without Bleach) </span></li>
                            <li><img src={Spray} alt="" /><span>Stain Removers</span></li>
                            <li><img src={Spray} alt="" /><span>Oxy-Stain Removers</span></li>
                            <li><img src={Spray} alt="" /><span>
                                Toilet Seat Disinfectant</span></li>
                            <li><img src={Spray} alt="" /><span>
                                Dishwashing Powder </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Wheel Cleaners </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Dashboard Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>
                                Dishwasher Deodorant</span></li>
                            <li><img src={Spray} alt="" /><span>Car Fresheners </span></li>
                            <li><img src={Spray} alt="" /><span>
                                Dishwasher Salt </span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Vinegar Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Drain Openers (Granular & Gel)</span></li>
                            <li><img src={Spray} alt="" /><span>Fridge & Microwave Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Odor Removers</span></li>
                            <li><img src={Spray} alt="" /><span>Fabric Freshners (Laundary & Freshners)</span></li>
                            <li><img src={Spray} alt="" /><span>Shower Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Carpet CLeaners</span></li>
                            <li><img src={Spray} alt="" /><span>Carpet Shampoos
                            </span></li>
                            <li><img src={Spray} alt="" /><span>Water Softeners</span></li>
                            <li><img src={Spray} alt="" /><span>Easy Ironing Water</span></li>
                            <li><img src={Spray} alt="" /><span>Vitro-Ceramic Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Glass & Window Cleaners</span></li>
                            <li><img src={Spray} alt="" /><span>Wet Wipes</span></li>
                            <li><img src={Spray} alt="" /><span>Rinse Aids</span></li>
                            <li><img src={Spray} alt="" /><span>
                                Air Fresheners (Liquid, gels, beads)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCare;