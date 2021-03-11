const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');
const six_makerRouter = require('./routes/six_maker');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/six_maker', six_makerRouter);


module.exports = app;
