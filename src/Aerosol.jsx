import React from "react";
import Navbar from "./Navbar";
import AerosolIMG from "./products/IMG9.jpg";
import Spray from "./icons/spray.png"
//import "./pro";

const Aerosol = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Navbar />
            <div className="container-fluid about">
                <h1 style={{ fontSize: '3em' }}>Aerosol</h1>
                <hr />
                <img src={AerosolIMG} />
                <p style={{ paddingLeft: '32em', marginTop: '-18em' }}>Whether your company is launching a new product and needs an expert source to help right from the
                formulation stage, or needs a strategic partner to manage the entire filling process with precise packaging,
                Aerometic offers over 20 years of specialized experience in Aerosol Products. Our typical fill sizes range from
                0.25 oz up to 8 oz. We work with customers through formulation and product development, testing/validation,
                filling, packaging and delivery to fill a variety of product sizes from small sample and travel size as low as 0.2
oz., up to larger Home-careproducts of 8 oz., with valve sizes from 20 mm up to 1 inch.</p>
                <p style={{ marginTop: '2em' }}>
                    We have enlisted Aerosol products in these few categories:
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Personal Care Products</span></li>
                            <li><img src={Spray} alt="" /><span>Household Cleaning Products</span></li>
                            <li><img src={Spray} alt="" /><span>Technical Sprays</span></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Car Maintenance Sprays</span></li>
                            <li><img src={Spray} alt="" /><span>Other Future Planning</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <h1 style={{ overflow: 'hidden' }}>OUR PRODUCT RANGES:</h1>
                <p>
                    Personal Care Products:
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Deodrant</span></li>
                            <li><img src={Spray} alt="" /><span>Deodorant-Antiperspirant</span></li>
                            <li><img src={Spray} alt="" /><span>Perfume</span></li>
                            <li><img src={Spray} alt="" /><span>Roll-on</span></li>
                            <li><img src={Spray} alt="" /><span>Hair Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Hair Mousse</span></li>
                            <li><img src={Spray} alt="" /><span>Shower Gel</span></li>
                            <li><img src={Spray} alt="" /><span>Hand Sanitizer</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Shaving Foam</span></li>
                            <li><img src={Spray} alt="" /><span>Shaving Gel</span></li>
                            <li><img src={Spray} alt="" /><span>Glitter Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Color Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Foot Deodorant</span></li>
                            <li><img src={Spray} alt="" /><span>Nail Polish Drying Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Cologne Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Micellar Water</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Legs Foundation</span></li>
                            <li><img src={Spray} alt="" /><span>Sun Protection Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Shoe-Shining Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Spring Water</span></li>
                            <li><img src={Spray} alt="" /><span>Mineral Water Facial Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Shower Foam</span></li>
                            <li><img src={Spray} alt="" /><span>Non Alcoholic Deodorant</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Household Cleaning Products:
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Carpet and Fabric Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Built and Enamel Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Wooden Furniture Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Seat & Sofa Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Glass Cleaner</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Automatic Refill Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Refrigerator Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Stain Remover Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Surface Sanitizer</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Tiles & Ceramic Cleansing Foam</span></li>
                            <li><img src={Spray} alt="" /><span>WC Cleaner</span></li>
                            <li><img src={Spray} alt="" /><span>Air Freshener / Natural Air Freshner</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Technical Sprays:
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Computer Cleaner Spray / Foam</span></li>
                            <li><img src={Spray} alt="" /><span>Rust Remover</span></li>
                            <li><img src={Spray} alt="" /><span>Oil Cleaner</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Silicone Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Injector Cleanser</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Air Conditioner Cleaner Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Disinfectant Spray</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Car Maintenance Sprays:
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Air Conditioner Cleaner Spray</span></li>
                            <li><img src={Spray} alt="" /><span>Stain Prevention Sprays</span></li>
                            <li><img src={Spray} alt="" /><span>Brake Lining Sprays</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Auto Perfumes</span></li>
                            <li><img src={Spray} alt="" /><span>Torpedo Polish Spray</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Carburetor Sprays</span></li>
                            <li><img src={Spray} alt="" /><span>Tyre Sprays</span></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>
                    Other Future Planning:
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Aerosol Products with Nitrogen</span></li>
                            <li><img src={Spray} alt="" /><span>Oxygen Filling</span></li>
                            <li><img src={Spray} alt="" /><span>Bag-on Valve Products</span></li>
                            <li><img src={Spray} alt="" /><span>Compressed Aerosol Products</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Products with dimethyl ether</span></li>
                            <li><img src={Spray} alt="" /><span>Aerosol Cream Products</span></li>
                            <li><img src={Spray} alt="" /><span>Aerosol Gels</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="prolist">
                            <li><img src={Spray} alt="" /><span>Aerosol Foams</span></li>
                            <li><img src={Spray} alt="" /><span>Powdered Aerosols</span></li>
                            <li><img src={Spray} alt="" /><span>Special Aerosol Products –Cooling Sprays etc</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aerosol;