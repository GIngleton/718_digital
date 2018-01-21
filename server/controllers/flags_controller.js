const Flag = require('../models/flag');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    const flagProps = req.body;

    Flag.create(flagProps)
      .then(flag => res.send(flag))
      .catch(next);
  },

  edit(req, res, next) {
    const flagId = req.params.id;
    const flagProps = req.body;

    Flag.findByIdAndUpdate({ _id: flagId }, flagProps)
      .then(() => Flag.findById({ _id: flagId }))
      .then(flag => res.send(flag))
      .catch(next);
  },

  delete(req, res, next) {
    const flagId = req.params.id;

    Flag.findByIdAndRemove({ _id: flagId })
      .then(flag => res.status(204).send(flag))
      .catch(next);
  }
};
