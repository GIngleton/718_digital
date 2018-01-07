const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const mailer = require('../misc/mailer');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

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

  // Respond to request indicating the user was created
        res.json({ token: tokenForUser(user) });
  // Send verification email
        //mailer.sendEmail(null, email, 'Please verify your email', html);
      });
    });

}
