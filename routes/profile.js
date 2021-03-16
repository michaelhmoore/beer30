var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require ('../partials')
const db = require('../models')

router.get('/', function (req, res, next) {
    res.render('profile',{
        partials,
        locals: {
            username: ''
        }
    })
})

module.exports = router;