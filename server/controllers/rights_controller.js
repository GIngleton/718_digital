const Right = require('../models/right');

exports.fetchRights = function(req, res, err) {
  Right.find({}, function(err, rights) {
    var rightsMap = {};

    rights.forEach(function(right) {
      rightsMap[right._id] = right;
    });
    res.send(rightsMap);
  });

  // if (err) {
  //   res.send(err);
  // } else {
  //   res.send(rightsMap);
  // }
};

//   server.get('/usersList', function(req, res) {
//   User.find({}, function(err, users) {
//     var userMap = {};
//
//     users.forEach(function(user) {
//       userMap[user._id] = user;
//     });
//
//     res.send(userMap);
//   });
// });

//   create(req, res, next) {
//     const rightProps = req.body;
//
//     Right.create(rightProps)
//       .then(right => res.send(right))
//       .catch(next);
//   },
//
//   edit(req, res, next) {
//     const rightId = req.params.id;
//     const rightProps = req.body;
//
//     Right.findByIdAndUpdate({ _id: rightId }, rightProps)
//       .then(() => Right.findById({ _id: rightId }))
//       .then(right => res.send(right))
//       .catch(next);
//   },
//
//   delete(req, res, next) {
//     const rightId = req.params.id;
//
//     Right.findByIdAndRemove({ _id: rightId })
//       .then(right => res.status(204).send(right))
//       .catch(next);
//   }
// };
