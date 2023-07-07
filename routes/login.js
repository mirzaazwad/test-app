const express = require('express');
const {registerView, loginView, registerUser } = require('../controllers/auth.controller');
const router = express.Router();
router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/login', loginView);
module.exports = router;