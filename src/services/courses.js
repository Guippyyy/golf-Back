const prisma = require("../../prisma/generateClient");
async function getCourses (req, res, next) {
    const golfCourses = await prisma.location.findMany({
        include: {
            course: {
                include: {
                    hole: true
                }
            }    
        }
    })
    res.json(golfCourses)
}

module.exports = getCourses