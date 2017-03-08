var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");

var index = require('./routes/index');
var users = require('./routes/users');
var randomJoke = require('./routes/random-joke');
var allJokes = require('./routes/all-jokes');
var addJoke = require('./routes/add-joke');
var login = require('./routes/login')
var apiRandomJoke = require('./api/random-joke');
var apiAllJokes = require('./api/all-jokes');
var apiAddJoke = require('./api/add-joke');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret_3162735', saveUninitialized: true, resave: true }));

app.use(function (req, res, next) {
  let sess = req.session
  if (sess.username) {
    return next();
  }
  //UNCOMMENTED DUE TO TESTING
  if (req.url.startsWith("/api/")) {
    // var err = new Error('Unauthorized');
    // err.status = 401;
    // return next(err);
    return next();
  }
  let un = req.body.username
  if (un) {
    sess.username = un;
    return res.redirect("/");
  }
  req.url = "/login";
  next();
});


app.use('/', index);
app.use('/users', users);
app.use('/random-joke', randomJoke);
app.use('/all-jokes', allJokes);
app.use('/add-joke', addJoke);
app.use('/login', login);
// api
app.use('/api/random-joke', apiRandomJoke);
app.use('/api/all-jokes', apiAllJokes);
app.use('/api/add-joke', apiAddJoke);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found XKD' + req.url);
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
