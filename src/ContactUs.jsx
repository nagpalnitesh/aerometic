import React from "react";
import "./navbar.css";
import "./scroll"

const url = `https://pixxmoserver.herokuapp.com/sendmail`;

class Contact extends React.Component {

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
        <div className="container-fluid cont row" id="contact">
          <form id="contactForm0" name="sentMessage" noValidate="noValidate" className="col-md-6 form">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-8">
                <h1>Let's Get in Touch !!</h1>
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
          <div className="col-md-6">
            <a href="./Home.jsx" className="navbar-brand nav-link logo1">
              <img src={process.env.PUBLIC_URL + './logo192.png'} alt="logo" />
            </a>
            <div className="txtcont" style={{ textTransform: 'uppercase' }}>
              <h1>Aerometic</h1>
              <h1>Care</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;