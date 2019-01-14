var express = require('express');
var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

// var indexRouter = require('./routes/index.routes');
// var userRouter = require('./routes/user.routes');
var uploadRouter = require('./routes/upload.routes');


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use('/', indexRouter);
// app.use('/user', userRouter);
app.use('/upload', uploadRouter);


// // handle http error 404
// app.use(function (req, res, next) {
//     next(createError(404));
// });


app.listen(3000);
console.log('Okay ~>Hi<~');

module.exports = app;