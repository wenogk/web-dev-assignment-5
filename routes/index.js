var express = require('express');
var router = express.Router();
var indexConstants = require('../views/constants/index.constants');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', indexConstants);
});

module.exports = router;
