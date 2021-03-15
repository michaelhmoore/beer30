var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require ('../partials')
const db = require('../models')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const sixpacks = await db.SixPack.findAll({
    where: {
      UserId: 1
    },
    include: db.Beer,
  })
  res.render('index',{
    locals: {
      sixpacks
    },
    partials
  } );
});

module.exports = router;
