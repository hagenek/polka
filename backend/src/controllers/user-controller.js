const mongoose = require('mongoose');
const User = require('../models/user');

const userBoard = (req, res) => {
  res.status(200).send({ message: "User authenticated woop" });
}

const getUser = async (req, res) => {
  let { id } = req.params;
  
  try {
    id = mongoose.Types.ObjectId(id);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch(error) {
    console.log(error);
    res.send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err)
    res.json(users)
  })
}

const getImageFromUser = async (req, res) => {
  let { id } = req.params;
  
  try {
    id = mongoose.Types.ObjectId(id);
    const user = await User.findById(id);
    res.status(200).json(user.username);
  } catch(error) {
    console.log(error);
}
}

const addUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body

  try {
    const user = new User({
      username,
      password,
      firstName,
      lastName,
      chats: [],
      groups: [],
      events: [],
      friends: [],
    })

    await user.save()

    res.statusCode(200).json(user);
  } catch(error) {
    console.log(error);
    res.send(error.message)
  }
}

module.exports = {
  getUser,
  userBoard,
  addUser,
  getAllUsers,
  getImageFromUser
}
