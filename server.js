
// require('dotenv').config();
console.log(process.env.EMAIL_USER)
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "build")))

const contactEmail = nodemailer.createTransport({
  host: "mail.btinternet.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define the contact route directly on app instead of using router
app.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Email error:", error);
      res.json({ code: 500, status: "Error", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// All remaining requests return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use environment port if available or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));