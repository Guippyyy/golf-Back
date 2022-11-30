const express = require('express');
const router = express.Router();
const  addScore = require('../services/scores');
const getScore = require('../services/scores');
const deleteScore = require('../services/scores');

router.post('/', addScore)

router.get('/', getScore);

router.delete('/', deleteScore);

module.exports = router;