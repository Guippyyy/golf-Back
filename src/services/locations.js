const { validationResult } = require("express-validator");
const prisma = require("../../prisma/generateClient");

async function getLocations(req, res, next) {
  const loc = await prisma.location.findMany();
  res.json(loc);
}

async function postLocations(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const loc = await prisma.location.create({
    data: {
      id: locationID,
      name: locationName,
      image: locationImage,
      colours: locationColours,
    },
  });
  res.json(loc)
}

module.exports = { getLocations, postLocations };
