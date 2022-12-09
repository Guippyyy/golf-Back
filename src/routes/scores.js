const express = require('express');
const router = express.Router();
const prisma = require("../../prisma/generateClient");
// const  addScore = require('../services/scores');
const getScore = require('../services/scores');
const deleteScore = require('../services/scores');
const {check, validationResult} = require('express-validator')

router.post('/', [
    check('coursID').notEmpty(),
    check('scores').notEmpty(),
    check('result').notEmpty()
],async function addScore(req, res){

    const errors = validationResult(req)
  
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
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

);

router.get('/', getScore);

router.delete('/', deleteScore);

module.exports = router;