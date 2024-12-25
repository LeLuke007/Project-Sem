const Registration = require('../models/Registration');

exports.registerUser = async (req, res) => {
  try {
    console.log('Received Registration data:', req.body);
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).send('Registration successful');
  } catch (error) {
    res.status(400).send(error);
  }
};