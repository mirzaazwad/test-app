const express = require('express');
const {registerView, loginView, registerUser, loginUser } = require('../controllers/auth.controller');
const router = express.Router();
router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/login', loginView);
router.post('/login', loginUser);
module.exports = router;