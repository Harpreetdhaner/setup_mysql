var express = require('express');
const test = require('../controllers/test');
var router = express.Router();

router.get('/userData',test)

module.exports = router;
