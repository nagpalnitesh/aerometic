import React from 'react'
import "./style.css"

const url = `https://aerometic-server.herokuapp.com/sendmail`;

class ContactUs extends React.Component {

    handleSubmit = (num) => {
        //handle submission
        var x = document.getElementById('contactForm' + num);
        var name = x.elements.name.value;
        var email = x.elements.email.value;
        var message = x.elements.message.value;
        var phone = x.elements.phone.value;

        if (name === undefined || email === undefined || message === undefined || phone === undefined || name === "" || email === "" || message === "" || phone === "") {
            alert('Incomplete form');
            return;
        }

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, message: message, phone: phone })
        }).then((res) => res.json()).then((res) => {
            if (res.type === 'info') {
                x.elements.name.value = "";
                x.elements.email.value = "";
                x.elements.phone.value = "";
                x.elements.message.value = "";
                alert("Mail sent successfully");
            } else {
                alert(res.info.response);
            }
        })
    }

    render() {
        return (
            <div>
                <div className="contact container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>
                                Address
                            </h3>
                            <p>
                                <a href="https://g.page/aerometic?share">
                                    Plot No.: WP-177/178 BOL, SANAND-2 G.I.D.C, Ahmedabad-382110, Gujarat, India.
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-paper-plane"></i>
                            <h3>
                                Email ID
                            </h3>
                            <p>
                                <a href="mailto:info@aerometic.com">info@aerometic.com</a>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-phone-alt"></i>
                            <h3>
                                Phone Number
                            </h3>
                            <p>
                                <a href="tel:+91-8460336523">
                                    +91-8460336523
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-6 contactform" data-aos="zoom-out" data-aos-duration="2000">
                            <form id="contactForm" noValidate="noValidate">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label for="name">Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label for="inputEmail4">Email:</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label for="phonenumber">Phone Number:</label>
                                        <input type="text" className="form-control" id="phonenumber" placeholder="+91123456789" />
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label for="subject">Subject:</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <label for="msg">Message:</label>
                                        <textarea type="text" rows="10" className="form-control" id="msg" placeholder="Your Message" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn contactbtn" onClick={() => this.handleSubmit(0)}>Send Message</button>
                            </form>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="contactimg"></div>
                            <div className="contacttxt">
                                <h2>AEROMETIC CARE</h2>
                            </div>
                        </div>
                        <div className="col-lg-12" data-aos="zoom-in" data-aos-duration="2000">
                            <iframe title="Aerometic Care Private Limited" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4691.535273194436!2d72.285433!3d22.991297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ab91a01a52daaed!2sAEROMETIC%20CARE%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1625721551803!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ContactUs
