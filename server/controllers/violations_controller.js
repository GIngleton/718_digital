const Violation = require('../models/violation');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    const violationProps = req.body;

    Violation.create(violationProps)
      .then(violation => res.send(violation))
      .catch(next);
  },

  edit(req, res, next) {
    const violationId = req.params.id;
    const violationProps = req.body;

    Violation.findByIdAndUpdate({ _id: violationId }, violationProps)
      .then(() => Violation.findById({ _id: violationId }))
      .then(violation => res.send(violation))
      .catch(next);
  },

  delete(req, res, next) {
    const violationId = req.params.id;

    Violation.findByIdAndRemove({ _id: violationId })
      .then(violation => res.status(204).send(violation))
      .catch(next);
  }
};
