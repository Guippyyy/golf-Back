const { PrismaClient } = require('@prisma/client')
var express = require('express');

var router = express.Router();

router.get('/', async function (req, res, next) {
    const prisma = new PrismaClient();
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