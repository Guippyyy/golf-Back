const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  //  const users = await prisma.user.deleteMany()
  // const users = await prisma.user.findMany();
  const loc = await prisma.location.findMany();
  
  res.json(loc)
});

module.exports = router;