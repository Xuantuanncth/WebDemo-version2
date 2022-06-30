var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var displayRouter = require('./routes/display');
var controlDevice = require('./routes/control');
var chartData = require('./routes/chart');
var settingTime = require('./routes/settingtime');


var app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: oneDay }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/display', displayRouter);
app.use('/control', controlDevice);
app.use('/setting', settingTime);
app.use('/chart', chartData);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;