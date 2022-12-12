const express = require('express');
const router = express.Router();
const { getLocations, deleteLocations } = require('../services/locations')

router.get('/', getLocations);
router.delete('/', deleteLocations);

module.exports = router;