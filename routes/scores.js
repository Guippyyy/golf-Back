const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
var express = require('express');
var router = express.Router();


router.post('/', async function(req, res){
    const {coursID, scores, result} = req.body;

    const score = await prisma.score.create({
        data : {
            coursID: coursID,
            scores: scores,
            result: result
        }
    })
    res.json(score)
})

router.get('/', async function(req,res){
    // const users = await prisma.score.deleteMany()
    const score = await prisma.score.findMany()

    res.json(score)
});
module.exports = router;