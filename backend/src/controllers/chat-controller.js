const User = require('../models/user');
const Chat = require('../models/user');
const Message = require('../models/user');

const addChatId = async (req, res, user, _id) => {
  try {
    User.findOneAndUpdate({_id: user._id}, { $push: { chats: _id } }) 
  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

const createChat = async (req, res, members) => {
  try {
    const chat = new Chat({
      //Should be changed to user ids
      members,
      messages: []
    })

    //Should only save if adding chat id to users is successful
    await chat.save();

    members.forEach(user => {
      await addChatId(req, res, user, chat._id)
    });
    
    res.json(chat).status(201).end();
  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

module.exports = {
  createChat,
}
