const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

// var indexRouter = require('./src/index');
const usersRouter = require('./src/routes/locations');
const coursesRouter = require('./src/routes/courses');
const scoresRouter = require('./src/routes/scores');



app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// app.use('/api', indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/scores", scoresRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error'); //anders aanpakken zonder jade
});

module.exports = app;