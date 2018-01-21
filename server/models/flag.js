const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const flagSchema = new Schema({
  // Pass properties to model
  violation: { type: Schema.Types.ObjectId, ref: 'violation' },
  user: { type: Schema.Types.ObjectId, ref: 'user' }
});

// Create model class
const Flag = mongoose.model('flag', flagSchema);

// Export model
module.exports = Flag;
