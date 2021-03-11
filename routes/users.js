var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', (req, res) => {
  res.render('register')
})

// register 
router.post('/register', async (req, res) => {
  // check if user exists
  const users = await db.User.findAll({
    where: {
      username: req.body.username
    }
  })
// if user exists, send error
  if (users.length) {
    res.status(422).json({ error: "Username already in use" })   
    return 
}    
  // if does NOT exists, create user
  // check name, email, gamertag, pw
  // if not all included, send error
  if (!req.body.username || !!req.body.password) {
    return res.status(422).json({ error: "Please include all required fields" })
  }
  // hash password
  const hash = await bcrypt.hash(req.body.password, 10)
  // create user
  const newUser = await db.User.create({
    username: req.body.username,
    password: hash
  })
  res.json(newUser)
})

module.exports = router;