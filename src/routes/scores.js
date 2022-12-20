const express = require('express');
const router = express.Router();
const { addScore, getScore, deleteScore } = require('../services/scores');
const {check} = require('express-validator')
const { auth} = require('express-oauth2-jwt-bearer');
const checkJwt = auth({
    audience: 'https://golfApp.guillaume.hogent.be',
    issuerBaseURL: `https://dev-8cpbbh21w2gsf8yo.us.auth0.com/`,
  });

router.post('/', [
    checkJwt,
    check('coursID', "coursID is required").not().isEmpty(),
    check('scores', "scores is required").not().isEmpty(),
    check('result').not().isEmpty()
], addScore);

router.get('/', checkJwt, getScore);
router.delete('/', deleteScore);

module.exports = router;