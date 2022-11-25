var express = require('express');
var router = express.Router();

const prisma = require('../../config/generateClient')
router.get('/', async function (req, res, next) {
    const golfCourses = await prisma.location.findMany({
        include: {
            course: {
                include: {
                    hole: true
                }
            }    
        }
    })
    console.log(golfCourses)
    res.json(golfCourses)
});

module.exports = router;