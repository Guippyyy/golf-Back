// const express = require('express');
// const router = express.Router();
// const prisma = require("../../prisma/generateClient");
// const getusers = require('../services/users')
// const {check, validationResult} = require('express-validator')



// router.get('/', getusers);

// router.post('/', [    check('userID').notEmpty(),
// check('name').notEmpty()],
// async function addUser(req, res, next) {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()})
//     }
//     const {userID, name} = req.body;

//     const users = await prisma.user.create({
//         data : {
//             userID: userID,
//             name: name
//         }
//     })
//     res.json(users)
// });

// module.exports = router;