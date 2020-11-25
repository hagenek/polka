const mongoose = require('mongoose');
const User = require('../models/user');
const Chat = require('../models/chat');
const Message = require('../models/message');

const addChatId = async (req, res, userId, chatId) => {
  try {
    await User.findByIdAndUpdate(userId, { $push: { chats: chatId } }, { useFindAndModify: false }) 
  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

const createChat = async (req, res) => {
  let { membersIds } = req.body;
  
  if(!membersIds || membersIds.length === 0) {
    res.status(400).send("No member id's provided")
  }

  membersIds = membersIds.map(id => mongoose.Types.ObjectId(id));

  try {
    const chat = new Chat({
      members: membersIds,
      messages: []
    })

    //Should only save if adding chat id to users is successful
    await chat.save();

    membersIds.forEach(async (userId) => {
      await addChatId(req, res, userId, chat._id)
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
