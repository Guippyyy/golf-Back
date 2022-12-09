const prisma = require("../../prisma/generateClient");

async function getScore(req, res, next) {	
    const score = await prisma.score.findMany()
    res.json(score)
}




async function deleteScore(req, res, next) {
    const score = await prisma.score.deleteMany()
    res.json(score)
}



module.exports = getScore, deleteScore;