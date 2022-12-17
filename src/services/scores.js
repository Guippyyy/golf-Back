const prisma = require("../../prisma/generateClient");
const { validationResult} = require('express-validator')

async function getScore(req, res, next) {	
    const userId = req.auth.payload.sub
    const score = await prisma.score.findMany({
        where : {
            userID : {
                equals : userId
            }
        }
    })
    res.json(score)
}

async function addScore(req, res){

    const errors = validationResult(req)
  
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const userId = req.auth.payload.sub
    const {coursID, scores, result} = req.body;

    const score = await prisma.score.create({
        data : {
            coursID: coursID,
            scores: scores,
            result: result,
            userID: userId
        }
    })

    res.status(200).json(score)
}



async function deleteScore(req, res, next) {
    const score = await prisma.score.deleteMany()
    res.json(score)
}



module.exports = { getScore, deleteScore, addScore }