const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api')
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');
const six_makerRouter = require('./routes/six_maker');
const aboutRouter = require('./routes/about')
const profileRouter = require('./routes/profile')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const store = new SequelizeStore({ db: db.sequelize })
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 2592000,
        },
        store: store,
    })
)
store.sync();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/api', apiRouter)
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/six_maker', six_makerRouter);
app.use('/about', aboutRouter);
app.use('/profile', profileRouter)


module.exports = app;
