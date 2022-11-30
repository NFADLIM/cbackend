// routes/router.js

const express = require('express');
const router = express.Router();
const { checkToken } = require ('./token.js');
const { login } = require('./loginctrl');
//const bcrypt = require('bcryptjs');
//const uuid = require('uuid');
//const jwt = require('jsonwebtoken');

const db = require('./db.js');
const ctrl = require('./users.js');

router.get('/login', ctrl.getUsername);

module.exports = router;