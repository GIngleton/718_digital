const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const rightSchema = new Schema({
  // Pass propertie to model
  title: String,
  category: String,
  details: String
});

// Create model class
const Right = mongoose.model('right', rightSchema);

// Export model
module.exports = Right;
