const mongoose = require("mongoose")
const Chat = require("./chat")

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  disability: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  genderInterest: {
    type: String,
    required: false,
  },
  hobbies: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  objectId: {
    type: String,
    required: false,
  },
  governmentId: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  birthdate: {
    type: String,
    required: false,
  },
  friends: {
    type: String,
    required: false,
  },
  groups: {
    type: String,
    required: false,
  },
  avatar: {
    type: Buffer
  },
  images: {
    type: Array,
  },
  events: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
})

const user = mongoose.model("User", userSchema)
module.exports = user
