const express = require('express');
const router = express.Router();

const{ getCourses, getCoursesNoHoles } = require('../services/courses');

router.get('/', getCourses);
router.get('/ ', getCoursesNoHoles);

module.exports = router;