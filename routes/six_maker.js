var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require('../partials')
const db = require('../models')
/* GET six maker page. */
router.get('/', function(req, res, next) {
  res.render('six_maker', {
    partials
  });
});

router.post('/',async function (req,res,next) {
    const sixpack = db.SixPack.build({
        name: req.body.title,
        description: req.body.description,
        UserId: req.session.user.id
    })
    await sixpack.save()
    await sixpack.setBeers(req.body['beers[]'])
    res.json(sixpack)
})

module.exports = router;
