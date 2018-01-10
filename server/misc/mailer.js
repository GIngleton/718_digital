const nodemailer = require('nodemailer');
const config = require('../config.js');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
   user: config.mailConfig.user,
   pass: config.mailConfig.pass
    }
});

const mailOptions = {
  from: config.mailconfig.user, // sender address
  to: 'to@email.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
