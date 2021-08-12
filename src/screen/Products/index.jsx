import React from 'react'

import "./style.css"

const Products = () => {
    return (
        <div>
            <div className="product container-fluid">
                <div className="productcarousel" data-aos="zoom-in" data-aos-duration="3000">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slidetxt slidetxt1">
                                    <div className="slideTxt">
                                        <div>
                                            <h1>Aerosol</h1>
                                            <h3>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slidetxt slidetxt2">
                                    <div className="slideTxt">
                                        <div>
                                            <h1>Fragrances</h1>
                                            <h3>Our cutting edge factory can produce high quality bespoke fragrances in desired volume. This high level of personalisation can contribute infinitely towards your branding goals or event. Our unambiguously limited production runs can  accommodate large scale events, corporate gifting, retail outlet or weddings, complete with individually tailored scent, gift boxing or packaging.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slidetxt slidetxt3">
                                    <div className="slideTxt">
                                        <div>
                                            <h1>Home Care</h1>
                                            <h3>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slidetxt slidetxt4">
                                    <div className="slideTxt">
                                        <div>
                                            <h1>Personal Care</h1>
                                            <h3>We are the manufacturer of aerosol with great experience and the support of our customers endorse us. If you are looking for a manufacturer and packer or outsourcing of aerosol manufacturing, we are your supplier, we will accompany you throughout the process of development of an aerosol, from R&D through legal regulations and design to the manufacture of the product.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productslist" data-aos="fade-left" data-aos-duration="3000">
                    <div className="slidetxt slidetxt1">
                        <div className="slideTxt">
                            <div>
                                <h1>Aerosol Filling</h1>
                                <h3>Our clients rely on our expertise to deliver customized Aerosol manufacturing solutions for their unique products and we are dedicated to exceeding our clients’ expectations by providing top quality, lower cost, low environmental impact, and safe Aerosol products.</h3>
                                <p>
                                    <a href="/aerosol"><span>Explore More</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productslist" data-aos="fade-right" data-aos-duration="3000">
                    <div className="slidetxt slidetxt2">
                        <div className="slideTxt">
                            <div>
                                <h1>Perfumes Filling</h1>
                                <h3>Aerometic is a boutique manufacturer of fine fragrance and private label Cosmetics, endowed with all the necessary infrastructural and processing capabilities to offer the best and most comprehensive private label perfume manufacturing service. Communicate your specifications, the desired quality standards, and the quantity of your products and we will do the rest. </h3>
                                <p>
                                    <a href="/perfumes"><span>Explore More</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productslist" data-aos="fade-left" data-aos-duration="3000">
                    <div className="slidetxt slidetxt3">
                        <div className="slideTxt">
                            <div>
                                <h1>Home Care and Hygiene Products</h1>
                                <h3>Aerometic has an extensive range of home care and hygiene products. We ensure that our products lead to the least possible environmental damage and are cruelty-free and take extensive care from what goes into our products to the way we package them, to not just reduce the high-Speed environmental footprint but also assure that they are affordable, effective, and kinder to the end-user.</h3>
                                <p>
                                    <a href="/homecare"><span>Explore More</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productslist" data-aos="fade-right" data-aos-duration="3000">
                    <div className="slidetxt slidetxt4">
                        <div className="slideTxt">
                            <div>
                                <h1>Personal Care Products</h1>
                                <h3>With Aerometic you can custom manufacture premium personal care products, made in a quality-centered manufacturing facility. If you already have a product developed or just an idea, we can provide our assistance with a multitude of services. With our expert research & development team and committed project managers, Aerometic is the one-stop solution for all your manufacturing needs.</h3>
                                <p>
                                    <a href="/personalcare"><span>Explore More</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
