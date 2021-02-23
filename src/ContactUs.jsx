import React from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import "./scroll"

const url = `https://aerometic-server.herokuapp.com/sendmail`;

class Contactus extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
      <>
        <Navbar />
        <div className="container-fluid cont row" id="contact">
          <div className="col-md-12 aero">
            <div className="row">
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + './loc.gif'} alt="location" /><h1>Address:</h1>
                <a href="https://goo.gl/maps/Hw8EjKZT61SEyWAF7" target={"_blank"} rel="noreferrer">Plot No. : WP-177/178, BOL SANAND -2 G.I.D.C, AHMEDABAD -382110, GUJARAT, INDIA.</a>
              </div>
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + './mail.gif'} alt="location" /><h1>Email ID:</h1>
                <a href="mailto:info@areometic.com">info@aerometic.com</a>
              </div>
              <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + './phone.gif'} alt="location" /><h1>Phone Number:</h1>
                <a href="tel:+91-8460336523">+91-8460336523</a>
              </div>
            </div>
          </div>
          <form id="contactForm0" name="sentMessage" noValidate="noValidate" className="col-md-8 form">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-8">
                <h1>Have Some Questions ?</h1>
                <div className="form-group">
                  <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required"
                    data-validation-required-message="Please
                                        enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required"
                    data-validation-required-message="Please
                                        enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone *" required="required"
                    data-validation-required-message="Please
                                        enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group form-group-textarea">
                  <textarea className="form-control" id="message" name="message" placeholder="Your Message *" required="required"
                    data-validation-required-message="Please
                                        enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <div id="success"></div>
                  <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="button" onClick={() => this.handleSubmit(0)}>
                    Send Message
            </button>
                </div>
              </div>
            </div>
          </form>
          <div className="col-md-4 form1">
            <a href="./Home.jsx" className="navbar-brand nav-link logo1">
              <img src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
            </a>
            <div className="txtcont" style={{ textTransform: 'uppercase' }}>
              <h1>Aerometic</h1>
              <h1>Care</h1>
            </div>
          </div>
          <div className="col-md-12 map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.291156658368!2d72.28582986439233!3d22.99142044218977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ea37dfb11e281%3A0x6ab91a01a52daaed!2sAEROMETIC%20CARE%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1613158072969!5m2!1sen!2sin" width="50%" height="600" frameborder="0" allowfullscreen="true" aria-hidden="false" tabindex="0" title="Aerometic"></iframe>
          </div>
        </div>

      </>
    );
  }
}

export default Contactus;