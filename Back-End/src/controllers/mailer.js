const nodemailer = require("nodemailer");
const NODE_EMAIL = process.env.NODE_EMAIL || 5
const NODE_PASSWORD = process.env.NODE_PASSWORD || 5

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: NODE_EMAIL,
    pass: NODE_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

// transporter.verify().then(()=>{
//   console.log("ready for send emails")
// })

module.exports = { transporter };
