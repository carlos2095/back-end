const nodemailer = require("nodemailer");

//contraseña de aplicacion
require("dotenv").config();

//creamos nuestro transporatdor
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "carlos209504@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;