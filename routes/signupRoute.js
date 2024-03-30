const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

// POST route for signup
router.post('/user/signup', signupController);

module.exports = router;