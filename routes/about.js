var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require('../partials')
/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        partials
    });
});

module.exports = router;
