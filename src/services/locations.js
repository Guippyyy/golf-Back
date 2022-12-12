const prisma = require("../../prisma/generateClient");

async function getLocations(req, res, next) {
  const loc = await prisma.location.findMany();
  res.json(loc)
};

async function deleteLocations(req, res, next) {
  const loc = await prisma.location.deleteMany();
  res.json(loc)
}; 

module.exports = { getLocations, deleteLocations }