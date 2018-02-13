const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const schoolSchema = new Schema({
  // Pass properties to model

  name: String,
  street: String,
  zip: String,
  city: String,
  state: String,
  gradeLevel: String
  //users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  //violatons: [{ type: Schema.Types.ObjectId, ref: 'violation' }]
});

// Create model class
const School = mongoose.model('school', schoolSchema);

// Export model
module.exports = School;
