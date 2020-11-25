const User = require('../models/user');
const Chat = require('../models/user');
const Message = require('../models/user');
const ObjectId = require('mongodb').ObjectId;

const createChat = async (req, res, members) => {
  try {
    const chat = new Chat({
      members,
      messages: []
    })
    await chat.save();
    res.json(chat).status(201).end();
  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

module.exports = {
  createChat,
}
