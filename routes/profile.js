var express = require('express');
const app = require('../app');
var router = express.Router();
const partials = require ('../partials')
const db = require('../models')

router.get('/', async function (req, res, next) {
    const user = await db.User.findByPk(req.session.user.id, {
        include: {
            model: db.SixPack,
            include: db.Beer
        }
    })
    res.render('profile',{
        partials,
        locals: {
            user
        }
    })
})

module.exports = router;