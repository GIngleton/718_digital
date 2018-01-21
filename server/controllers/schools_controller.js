const School = require('../models/school');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    const schoolProps = req.body;

    School.create(schoolProps)
      .then(school => res.send(school))
      .catch(next);
  },

  edit(req, res, next) {
    const schoolId = req.params.id;
    const schoolProps = req.body;

    School.findByIdAndUpdate({ _id: schoolId }, schoolProps)
      .then(() => School.findById({ _id: schoolId }))
      .then(school => res.send(school))
      .catch(next);
  },

  delete(req, res, next) {
    const schoolId = req.params.id;

    School.findByIdAndRemove({ _id: schoolId })
      .then(school => res.status(204).send(school))
      .catch(next);
  }
};
