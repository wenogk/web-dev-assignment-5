var express = require('express');
var router = express.Router();
var indexConstants = require('../views/constants/index.constants');
var portfolioConstants = require('../views/constants/portfolio.constants');
var resumeConstants = require('../views/constants/resume.constants');
var contactConstants = require('../views/constants/contact.constants');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', indexConstants);
});

router.get('/resume', function(req, res, next) {
  res.render('resume', resumeConstants);
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', portfolioConstants);
});

router.get('/contact', function(req, res, next) {
  res.render('contact', contactConstants);
});

module.exports = router;
