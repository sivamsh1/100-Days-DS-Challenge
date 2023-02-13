var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

var twoSum = function (nums, target) {
  let d = {}
  for (let i = 0; i < nums.length; i++) {
      let rest = target - nums[i];
      if (d[rest] ) {
          return [d[rest], i];
      }
      d[nums[i]] = nums[i];

  }

  
};



function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (arr[mid] < x) {
          low = mid + 1;
      } else if (arr[mid] > x) {
          high = mid - 1;
      } else {
          return mid;
      }
  }
}