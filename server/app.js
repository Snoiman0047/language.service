var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = (app) => {
  var word = require('./controllers/word.controller');
  app.post('/save-word', word.saveWord);
  app.get('/find-word', word.findWord);
}

var config = require('./config');

mongoose.connect(config.dbConfig.dbURL, { useNewUrlParser: "true", useUnifiedTopology: "true" } )
        .then((db) => {
          console.log("Connected to db.");
        }, (err) => { console.log(err); });

require('./routes/word.router')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
