var express = require('express');
var router = express.Router();
var indexConstants = require('../views/constants/index.constants');
var portfolioConstants = require('../views/constants/portfolio.constants');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', indexConstants);
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', portfolioConstants);
});

module.exports = router;
