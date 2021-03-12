var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require ('../partials')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    partials
  } );
});

module.exports = router;
