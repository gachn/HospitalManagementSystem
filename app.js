var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var currentUser = require('./currentUser');
//connect with Database
mongoose.connect('mongodb://localhost/HMS');
var db = mongoose.connection;

const hbs=require('hbs')
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var dashboard = require('./routes/dashboard');
var logout = require('./routes/logout');
var test = require('./routes/test');
var patientSearch = require('./routes/patientSearch');
var patientRecord = require('./routes/patientRecord');

var dashboard = require('./routes/dashboard');
var path = require('path');
var app = express();

//global login varialble
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',login);
app.use('/dashboard',dashboard);
app.use('/logout',logout);
app.use('/test',test);
app.use('/patientSearch',patientSearch);
app.use('/patientRecord',patientRecord);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports=app
