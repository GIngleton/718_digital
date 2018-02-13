const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');
const School = require('../models/school');
const Violation = require('../models/violation');

// module.exports = {
//   greeting(req, res) {
//     // var ObjectId = Schema.ObjectId;
//     const userEmail = 'test321@test.com';
//     // const userProps = req.body;
//     User.findOne({ email: req.query.email }, function(err, user) {
//       console.log(req.query.email);
//       if (err) {
//         res.send(err);
//       } else {
//         // console.log(user);
//         res.send(user);
//       }
//     });

exports.pendingUsers = function(req, res) {
  // var ObjectId = Schema.ObjectId;
  //const userEmail = 'test321@test.com';
  // const userProps = req.body;
  // console.log(req.query.email);
  User.find({ is_Approved: 'notYet' }, function(err, users) {
    console.log(users);
    if (err) {
      res.send(err);
    } else {
      // console.log(user);
      res.send(users);
    }
  });
};

exports.confirmEmail = function(req, res) {
  User.findOne({ email: req.query.email }, function(err, user) {
    console.log(user);
    if (err) return err;
    user.is_Approved = true;
    // user.set({ is_Approved: true });
    user.save(function(err, updatedUser) {
      if (err) {
        console.log(err);
      } else {
        res.send(updatedUser);
      }
    });
  });
};

exports.fetchSchools = function(req, res, err) {
  School.find({}, function(err, schools) {
    var schoolsMap = {};

    schools.forEach(function(school) {
      schoolsMap[school._id] = school;
    });
    res.send(schoolsMap);
  });
};

exports.fetchRights = function(req, res, err) {
  Right.find({}, function(err, rights) {
    var rightsMap = {};

    rights.forEach(function(right) {
      rightsMap[right._id] = right;
    });
    res.send(rightsMap);
  });
};

exports.pendingViolations = function(req, res) {
  Violation.find({ status: 'pending' }, function(err, violations) {
    console.log(violations);
    if (err) {
      res.send(err);
    } else {
      res.send(violations);
    }
  });
};
