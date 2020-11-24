const User = require('../models/user');
const ObjectId = require('mongodb').ObjectId;

const registerUser = async (req, res) => {
  try {
    const createNewUser = new User({
      id: ObjectId(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      governmentid: req.body.governmentid,
      email: req.body.email,
      password: req.body.password
    });
    await createNewUser.save();
    res.json(createNewUser).status(201).end();
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
}

module.exports.registerUser = registerUser;