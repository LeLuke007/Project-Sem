const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  noc: {
    type: String,
    required: true
  }
  // Add other fields as needed
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
