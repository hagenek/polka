const mongoose = require('mongoose');
const User = require('../models/user');
const Chat = require('../models/chat');
const Message = require('../models/message');

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
      await User.findByIdAndUpdate(userId, { $push: { chats: chat._id } }, { useFindAndModify: false }) 
    });
    
    res.json(chat).status(201).end();

  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

const addMessage = async (req, res) => {
  const { text, senderId, timestamp, chatId } = req.body;

  if(!text || !senderId || !timestamp || !chatId) {
    res.status(400).send("Error: missing property");
  }

  try {
    const message = new Message({
      text,
      sender: mongoose.Types.ObjectId(senderId),
      timestamp
    })

    await message.save();

    await Chat.findByIdAndUpdate(chatId, { $push: { messages: message }}, { useFindAndModify: false })
    res.json(message).status(201).end();

  } catch(error) {
    console.log(error)
    res.send(error.message)
  }
}

const getChatById = async (req, res) => {
  const { id } = req.body;
  res.send(id)
}

module.exports = {
  createChat,
  addMessage
}
