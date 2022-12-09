var express = require('express');
var router = express.Router();

const {check, validationResult} = require('express-validator')

const  getCourses  = require('../services/courses');
router.get('/', getCourses);

module.exports = router;