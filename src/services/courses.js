const prisma = require("../../prisma/generateClient");
async function getCourses (req, res, next) {

    try {
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
    } catch (error) {
        res.json({ "ERROR": error.message });
    }
    
}

async function getCoursesNoHoles(req, res){
    try {
        const golfCourses = await prisma.course.findMany()
        res.json(golfCourses)
    } catch (error) {
        res.json({ "ERROR": error.message });
    }
}

module.exports = { getCourses, getCoursesNoHoles }