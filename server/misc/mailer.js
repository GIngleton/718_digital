const nodemailer = require('nodemailer');
const config = require('../config.js');

const transport = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: config.mailConfig.user,
    pass: config.mailConfig.pass
  },
  tls: {
    rejecttUnauthorized: false
  }
});

module.exports = {
  sendEmail(from, to, subject, html) {
    return new Promise((resolve, reject) => {
      transport.sendMail({ from, subject, to, html }, (err, info) => {
        if (err) reject(err);
        resolve(info);
      });
    });
  }
}
