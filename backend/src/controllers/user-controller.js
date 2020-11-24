exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
}

// const User = require('../models/user');
// const ObjectId = require('mongodb').ObjectId;

// const registerUser = async (req, res) => {
//   try {
//     const createNewUser = new User({
//       id: ObjectId(),
//       firstName: req.body.firstName,
//       lastName: req.body.lastNName,
//       username: req.body.username,
//       governmentId: req.body.governmentId,
//       email: req.body.email,
//       password: req.body.password
//     });
//     await createNewUser.save();
//     res.json(createNewUser).status(201).end();
//   } catch (error) {
//     console.log(error);
//     res.send(error.message);
//   }
// }

// module.exports.registerUser = registerUser;