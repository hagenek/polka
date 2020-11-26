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

module.exports = {
  getUser,
  userBoard
}
