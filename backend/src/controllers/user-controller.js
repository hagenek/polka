const user = require('../models/user');
const ObjectId = require('mongodb').ObjectId;

const registerUser = async (req, res) => {
  console.log()
  try {
    const createNewUser = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      governmentId: req.body.governmentId,
      email: req.body.email,
      password: req.body.password,
      chats: []
    });
    await createNewUser.save();
    res.json(createNewUser).status(201).end();
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
}

module.exports.registerUser = registerUser;