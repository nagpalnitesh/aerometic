/* Imports */
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

/* Mailer settings */
async function xyz() {
  return transporter;
}

/* Server initialize */
const app = express();

/* Sets and uses */
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

/* Routes */
app.get("/", (req, res) => {
  res.end("Server up and running");
});
app.post("/sendmail", async (req, res) => {
  console.log("requested");
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var phone = req.body.phone;
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "careers@aerometic.com", // generated ethereal user
      pass: "JvM@7599", // generated ethereal password
    },
  });

  var mailOptions = {
    from: "niteshnagpal6@gmail.com",
    to: "nagpalnitesh9@gmail.com",
    subject: "Query form filled",
    html: `<b>From</b>:${name} (${email})<br><b>Message</b>: ${message}<br><b>Contact</b>: ${phone}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(JSON.stringify({ info: error, type: "error" }));
      res.end();
    } else {
      console.log("Email sent: " + info.response);
      res.send(JSON.stringify({ info: info, type: "info" }));
      res.end();
    }
  });
});

/* Ports and listens */
var port = process.env.PORT;
app.listen(port, "0.0.0.0", () => {
  console.log(`port : ${port}`);
});
