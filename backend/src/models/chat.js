const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message')

const { Schema } = mongoose;

const chatSchema = new Schema({
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
});

const Chat = mongoose.model("Chat", chatSchema)

module.exports.default = Chat
