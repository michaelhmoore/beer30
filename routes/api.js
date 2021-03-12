var express = require('express');
const db  = require('../models')
var router = express.Router();

/* GET home page. */
router.get('/beers', function (req, res, next) {
    db.Beer.findAll()
        .then(beers => {
            res.json(beers)
        })
});

router.get('/beers/:id', async (req,res,next) => {
    const id = Number(req.params.id)
    const beer = await db.Beer.findByPk(id);
if (beer === null) {
  console.log('Not found!');
} else {
  res.json(beer) // true
  // Its primary key is 123
}
})

module.exports = router;
