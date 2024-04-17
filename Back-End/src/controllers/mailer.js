const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "framqoo@gmail.com",
    pass: "blbx whpt uilu petn",
  },
  tls: { rejectUnauthorized: false },
});

// transporter.verify().then(()=>{
//   console.log("ready for send emails")
// })

module.exports = { transporter };
