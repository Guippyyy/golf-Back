const express = require('express');
const app = express();
app.use(express.json()); 


const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()


// var indexRouter = require('./src/index');
const locationsRouter = require('./src/routes/locations');
const coursesRouter = require('./src/routes/courses');
const scoresRouter = require('./src/routes/scores');

const cors_origin = process.env.CORS_ORIGIN || "http://localhost:3000"



app.use(cors({
  preflightContinue: true,
  origins: [cors_origin]
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.get('/profile', function(req, res) {
  res.json({ 'does it work?': true })
});

app.use("/api/locations", locationsRouter);
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
});

module.exports = app;