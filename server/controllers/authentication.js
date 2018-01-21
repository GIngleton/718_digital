const User = require('../models/user');
const Right = require('../models/right');
const School = require('../models/school');
const Violation = require('../models/violation');
const Flag = require('../models/flag');
const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ROOT_URL = 'http://localhost:3090';

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kyerproject@gmail.com',
    pass: '!2qwaszx'
  }
});

// var mailSignup = {
//   from: 'kyerproject@gmail.com', // sender address
//   to: email, // list of receivers
//   subject: 'Subject of your email', // Subject line
//   html: '<a href=>Click link to continue registration</a>' // plain text body
// };

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just have to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const _id = req.body._id;
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body);

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with email does exist, return an error (422)
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      // _id: new mongoose.Types.ObjectId(),
      _id: new mongoose.Types.ObjectId(),
      email: email,
      password: password,
      firstName: null,
      lastName: null,
      is_Student: null,
      verification: null,
      school_Id: null,
      is_Admin: false,
      is_Approved: false
    });

    // var mailSignup = {
    //   from: 'kyerproject@gmail.com', // sender address
    //   to: email, // list of receivers
    //   subject: 'Subject of your email', // Subject line
    //   html: '<a href=>Click link to continue registration</a>' // plain text body
    // };

    transporter.sendMail(
      {
        from: 'kyerproject@gmail.com', // sender address
        to: user.email, // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<a href=>Click link to continue registration</a>' // plain text body
      },
      function(err, info) {
        if (err) console.log(err);
        else console.log(info);
      }
    );

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.signupDetails = function(req, res, next) {
  User.update({ _id: req.user.id }, req.body, function(err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      req.flash('error', 'No account found');
      return res.redirect('/signin');
    }
    // **Note** find out if email and password need to be passed back in
    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var is_Student = req.body.is_Student;
    var school_Id = req.body.school_Id;
    var verification = req.body.verification.trim();

    // validate
    if (!firstName || !lastName || !is_Student || !school_Id) {
      req.flash('error', 'One or more required fields are empty');
      return res.redirect('/signupDetails');
    }

    user.email = email;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
    user.is_Student = is_Student;
    user.school_Id = school_Id;
    user.verification = verification;

    // Save to DB
    user.save(function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });
  });
};

exports.addRight = function(req, res, next) {
  const title = req.body.title;
  const media = req.body.media;
  const text = req.body.text;

  console.log(req.body);

  if (!title || !text) {
    return res.status(422).send({ error: 'You must provide title and text.' });
  }
  // Create and save right to record
  const right = new Right({
    title: title,
    media: media,
    text: text
  });

  right.save(function(err) {
    if (err) {
      return next(err);
    }
  });
  return res.redirect('/');
};

exports.addSchool = function(req, res, next) {
  const name = req.body.name;
  const address = req.body.address;
  const gradeLevel = req.body.gradeLevel;
  const users = req.body.users;
  const violations = req.body.violations;

  console.log(req.body);

  if (!name || !address || !gradeLevel) {
    return res
      .status(422)
      .send({ error: 'You must provide name, address, and grade level.' });
  }

  // Create and save school to record
  const school = new School({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    address: address,
    gradeLevel: gradeLevel,
    users: users,
    violations: violations
  });

  school.save(function(err) {
    if (err) {
      return next(err);
    }
  });
  return res.redirect('/');
};

exports.addViolation = function(req, res, next) {
  const flagger = req.body.flagger;
  const school = req.body.school;
  const info = req.body.info;
  const associated_right = req.body.associated_right;

  console.log(req.body);

  if (!info) {
    return res.status(422).send({ error: 'You must provide info' });
  }

  const violation = new Violation({
    flagger: flagger,
    school: school,
    info: info,
    associated_right: associated_right
  });

  violation.save(function(err) {
    if (err) {
      return next(err);
    }
  });
  return res.redirect('/');
};

exports.addFlag = function(req, res, next) {
  const violation = req.body.violation;
  const user = req.body.user;

  console.log(req.body);

  const flag = new Flag({
    violation: violation,
    user: user
  });

  flag.save(function(err) {
    if (err) {
      return next(err);
    }
  });
  return res.redirect('/');
};
