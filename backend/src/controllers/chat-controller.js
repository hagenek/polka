const User = require('../models/user');
const Chat = require('../models/user');
const Message = require('../models/user');

const addChatId = async (req, res, userId, chatId) => {
  try {
    User.findOneAndUpdate({_id: userId}, { $push: { chats: chatId } }) 
  } catch(error) {
    console.log(error)
    res.send(error.message);
  }
}

const createChat = async (req, res, membersIds) => {
  try {
    const chat = new Chat({
      members: membersIds,
      messages: []
    })

    //Should only save if adding chat id to users is successful
    await chat.save();

    membersIds.forEach(userId = async () => {
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
