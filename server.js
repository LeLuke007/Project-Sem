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

// Routes
const registrationRoutes = require('./backend/routes/registrationRoutes');
const nocRoutes = require('./backend/routes/nocRoutes');
app.use('/register', registrationRoutes);
app.use('/noc', nocRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});