var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Romeno\'s Portfolio' ,
    name: 'Dunumalage Romeno Wenogk Fernando'
  });
});

module.exports = router;
