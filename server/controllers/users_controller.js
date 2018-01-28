const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

module.exports = {
  greeting(req, res) {
    // var ObjectId = Schema.ObjectId;
    const userEmail = 'test321@test.com';
    // const userProps = req.body;
    User.findOne({ email: userEmail }, function(err, user) {
      if (err) {
        res.send(err);
      } else {
        // console.log(user);
        res.send(user);
      }
    });
    // module.exports = {
    //   greeting(req, res) {
    //     // var ObjectId = Schema.ObjectId;
    //     const userEmail = req.params.email;
    //     // const userProps = req.body;
    //     User.findOne({ email: 'test321@test.com' }, function(err, user) {
    //       if (err) {
    //         res.send(err);
    //       } else {
    //         // console.log(user);
    //         res.send(user);
    //       }
    //     });
    // .then(() => User.findById({ _id: userId }))
    // .then(user => res.send(user))
    // .catch(next);
    //     res.send({ hi: 'there' });
    //
    //     db.User.findOne({_id:ObjectID(req.params.id)},function(err,doc){
    //   if(err){
    //     res.send(err);
    //   }
    //   else{
    //     return res.json(doc);
    //   }
    // });
  },

  create(req, res, next) {
    const userProps = req.body;

    User.create(userProps)
      .then(user => res.send(user))
      .catch(next);
  },

  edit(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;

    User.findByIdAndUpdate({ _id: userId }, userProps)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const userId = req.params.id;

    User.findByIdAndRemove({ _id: userId })
      .then(user => res.status(204).send(user))
      .catch(next);
  }
};
