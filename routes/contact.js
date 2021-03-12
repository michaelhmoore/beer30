var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require('../partials')
/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    partials
  });
});

module.exports = router;
