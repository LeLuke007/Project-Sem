const mongoose = require('mongoose');

const nocSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
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
  email: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  companyloc: {
    type: String,
    required: true
  },
  pocname: {
    type: String,
    required: true
  },
  pocphone: {
    type: String,
    required: true
  }
  // Add other fields as needed
});

const Noc = mongoose.model('Noc', nocSchema);

module.exports = Noc;
