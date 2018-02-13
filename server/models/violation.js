const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const violationSchema = new Schema({
  // Pass properties to model
  flagger: { type: Schema.Types.ObjectId, ref: 'user' }, // link to specific user who created violation
  school: { type: Schema.Types.ObjectId, ref: 'school' }, // link to specific school
  info: String,
  associated_right: { type: Schema.Types.ObjectId, ref: 'right' }, // link to specific right
  status: String // pending or confirmed
});

// Create model class
const Violation = mongoose.model('violation', violationSchema);

// Export model
module.exports = Violation;
