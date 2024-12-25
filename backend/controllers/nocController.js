const Noc = require('../models/Noc');

exports.submitNoc = async (req, res) => {
  try {
    console.log('Received Registration data:', req.body);
    const newNoc = new Noc(req.body);
    await newNoc.save();
    res.status(201).send('NOC submission successful');
  } catch (error) {
    console.error('Error saving NOC:', error); // Add this line
    res.status(400).send(error);
  }
};
