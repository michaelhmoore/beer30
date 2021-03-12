var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const app = require('../app');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/register', (req, res) => {
  res.render('register', {
    locals: { error: "" }
  })
})

router.get('/login', (req, res) => {
  res.render('login', {
    locals: { error: "" }
  })
})

// router.post('/login', (req, res) => {
//   db.User.create({
//     username: req.body.username,
//     password: req.body.password
//   })
//     .then(user => {
//       res.json(user);
//     })
//     .catch(error => {
//       res.json(error.errors.map(e => e.message))
//     })
// })

              /* Register */
router.post('/register', async (req, res) => {
  // check if user exists
  const users = await db.User.findAll({
    where: {
      username: req.body.username    }
  })
// if user exists, send error
  if (users.length) {
    return res.status(422).render( 'register', {
      locals: { error: "Username already in use." }
    });   
  }  
  // if does NOT exists, create user
  // check name, email, gamertag, pw
  // if not all included, send error
  if (!req.body.username || !req.body.password) {
    return res.status(422).render( 'register', {
      locals: { error: "Please include all required fields." }
    });
  }
  // hash password
  const hash = await bcrypt.hash(req.body.password, 10)
  // create user
  const newUser = await db.User.create({
    username: req.body.username,
    password: hash
  })
  res.redirect('/users/login');

  res.json(newUser)

})

                /* Login */
// Look at error codes to make sure we have the right ones!
router.post('/login', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(422).render( 'login', {
      locals: { error: 'Please include all required fields.' }
    });
  }
  const user = await db.User.findOne({
    where: {
      username: req.body.username
    }
  });
    if (!user) {
      return res.status(404).render( 'login', {
        locals: { error: 'Couldn\'t find user with that username.' }
      });
    }
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
      return res.status(401).render( 'login', {
        locals: { error: 'Incorrect password.' }
      });
    }
    res.redirect('/');
    
    req.sessions.user = user;
    
})

router.get('/logout', (req, res) => {
  req.session.user = null;

  res.redirect('/');
})

module.exports = router;