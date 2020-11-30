const mongoose = require("mongoose")
const User = require("./user")
const Message = require("./message")

const { Schema } = mongoose

const chatSchema = new Schema({
  members: [
    {
      type: Schema.Types.ObjectId,
      default: [],
      ref: "User",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      default: [],
      ref: "Message",
    },
  ],
})

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat
