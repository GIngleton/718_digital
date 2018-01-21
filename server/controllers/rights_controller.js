const Right = require('../models/right');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    const rightProps = req.body;

    Right.create(rightProps)
      .then(right => res.send(right))
      .catch(next);
  },

  edit(req, res, next) {
    const rightId = req.params.id;
    const rightProps = req.body;

    Right.findByIdAndUpdate({ _id: rightId }, rightProps)
      .then(() => Right.findById({ _id: rightId }))
      .then(right => res.send(right))
      .catch(next);
  },

  delete(req, res, next) {
    const rightId = req.params.id;

    Right.findByIdAndRemove({ _id: rightId })
      .then(right => res.status(204).send(right))
      .catch(next);
  }
};
