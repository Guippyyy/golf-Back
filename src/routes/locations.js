const express = require('express');
const router = express.Router();
const {check, validationResult} = require("express-validator");
const { getLocations, postLocations } = require('../services/locations')

router.get('/', getLocations);

router.post('/', [
    check('name', 'location name is required').not().isEmpty(), 
    check('id', 'location id is required').not().isEmpty(),
    check('image', 'location image is required').not().isEmpty(),
    check('colours', 'location name is required').not().isEmpty()
] ,postLocations);

module.exports = router;