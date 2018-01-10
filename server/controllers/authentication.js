const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
   user: 'kyerproject@gmail.com',
   pass: '!2qwaszx'
    }
});

const mailOptions = {
  signup: {
  from: 'kyerproject@gmail.com', // sender address
  to: 'georgeingleton@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Link to your profile setup</p>'// plain text body
}};

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just have to give them a token
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password){
    return res.status(422).send({error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser){
      if (err) {
        return next(err);
      }

  // If a user with email does exist, return an error (422)
      if (existingUser) {
        return res.status(422).send({error: 'Email is already in use'});
      }
  // If a user with email does NOT exist, create and save user record
      const user = new User({
        email: email,
        password: password,
        is_Student: null,
        verification: null,
        school_id: null,
        active: false,
        is_Admin: false,
        is_Approved: false
      });

      user.save(function(err){
        if (err){
          return next(err);
        }

        transporter.sendMail(mailOptions.signup, function (err, info) {
           if(err)
             console.log(err)
           else
             console.log(info);
        });

  // Respond to request indicating the user was created
        res.json({ token: tokenForUser(user) });

      });
    });

}
