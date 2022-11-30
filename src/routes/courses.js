var express = require('express');
var router = express.Router();

const  getCourses  = require('../services/courses');
router.get('/', getCourses);

module.exports = router;