const prisma = require("../../prisma/generateClient");

async function addScore(req, res){
    const {coursID, scores, result} = req.body; // hier zit het probleem

    const score = await prisma.score.create({
        data : {
            coursID: coursID,
            scores: scores,
            result: result
        }
    })
    res.json(score)
}


async function getScore(req, res, next) {	
    const score = await prisma.score.findMany()
    res.json(score)
}

async function deleteScore(req, res, next) {
    const score = await prisma.score.deleteMany()
    res.json(score)
}



module.exports = addScore, getScore, deleteScore;