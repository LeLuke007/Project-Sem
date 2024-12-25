const express = require('express');
const router = express.Router();
const nocController = require('../controllers/nocController');

router.post('/', nocController.submitNoc);

module.exports = router;
