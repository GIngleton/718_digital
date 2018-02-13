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
  const is_Admin = req.body.is_Admin;

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
      is_Admin: is_Admin,
      is_Approved: 'no'
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

exports.signupDetails = function(req, res) {
  User.findOne({ email: req.query.email }, function(err, user) {
    console.log(user);
    if (err) {
      return err;
    }

    if (!user) {
      req.flash('error', 'No account found');
      return res.redirect('/signin');
    }
    // **Note** find out if email and password need to be passed back in
    // user.email = req.body.email;
    // user.password = req.body.password;
    user.firstName = req.body.firstName.trim();
    user.lastName = req.body.lastName.trim();
    user.is_Student = req.body.is_Student;
    // user.school_Id = req.body.school_Id;
    user.verification = req.body.verification.trim();

    // validate
    // if (!firstName || !lastName || !is_Student || !school_Id) {
    //   req.flash('error', 'One or more required fields are empty');
    //   return res.redirect('/signupDetails');
    // }
    //
    // user.email = email;
    // user.password = password;
    // user.firstName = firstName;
    // user.lastName = lastName;
    // user.is_Student = is_Student;
    // user.school_Id = school_Id;
    // user.verification = verification;

    // Save to DB
    user.save(function(err, updatedUser) {
      if (err) {
        rconsole.log(err);
      } else {
        res.send(updatedUser);
      }

      // get rid of the if statements and use .then
      // return res.redirect('/');
    });
  });
};

exports.addRight = function(req, res, next) {
  const title = req.body.title;
  const category = req.body.category;
  const details = req.body.details;

  console.log(req.body);

  if (!title || !category || !details) {
    return res
      .status(422)
      .send({ error: 'You must provide title, category, and details.' });
  }
  // Create and save right to record
  const right = new Right({
    title: title,
    category: category,
    details: details
  });

  right.save(function(err, right) {
    if (err) {
      return next(err);
    }
  });
  return res.send(right);
};

exports.addSchool = function(req, res, next) {
  const name = req.body.name;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const gradeLevel = req.body.gradeLevel;
  //const users = req.body.users;
  //const violations = req.body.violations;

  //console.log(req.body);

  if (!name || !street || !city || !state || !zip || !gradeLevel) {
    return res
      .status(422)
      .send({ error: 'You must provide name, full address, and grade level.' });
  }

  // Create and save school to record
  const school = new School({
    //_id: new mongoose.Types.ObjectId(),
    name: name,
    street: street,
    city: city,
    state: state,
    zip: zip,
    gradeLevel: gradeLevel
    //users: users,
    //violations: violations
  });

  // school
  // .save()
  // .then(item => {
  //   res.send('item saved to database');
  // })
  // .catch(err => {
  //   res.status(400).send('unable to save to database');
  // });

  school.save(function(err, school) {
    if (err) {
      return next(err);
    }
  });
  return res.send(school);
};

exports.newViolation = function(req, res, next) {
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
    associated_right: associated_right,
    status: 'pending'
  });

  violation.save(function(err) {
    if (err) {
      return next(err);
    }
  });
  return res.send(violation);
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
// exports.greeting = function(req, res, next) {
//   // var ObjectId = Schema.ObjectId;
//   console.log(req.query);
//   var userEmail = req.query.email;
//   console.log(userEmail);
//   // const userProps = req.body;
//   User.findOne({ email: userEmail }, function(err, user) {
//     if (err) {
//       return next(err);
//     }
//     res.send(user._id);
//   });
// };
