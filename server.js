const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('static'));

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MongoDB connection string is missing. Please check your .env file.');
  process.exit(1);
}

mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const User = require('./backend/models/User'); // Import User model

// Routes
const registrationRoutes = require('./backend/routes/registrationRoutes');
const nocRoutes = require('./backend/routes/nocRoutes');
app.use('/register', registrationRoutes);
app.use('/noc', nocRoutes);

// Sign-Up Route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false, message: 'Please fill in all fields.' });
  }

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.json({ success: false, message: 'Username already exists. Please choose a different username.' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ success: true, message: 'Sign-Up Successful!' });
  } catch (error) {
    console.error('Error:', error);
    res.json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false, message: 'Please fill in all fields.' });
  }

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      res.json({ success: true, userId: user._id, userName: user.username });
    } else {
      res.json({ success: false, message: 'Invalid Credentials. Please try again.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});