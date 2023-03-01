var express = require('express');
const addUser = require('../controllers/addUser');
const User = require('../models/User');


var router = express.Router();
router.post('/add-user',addUser)

module.exports = router