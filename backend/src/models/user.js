const mongoose = require("mongoose")

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
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
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
  genderinterest: {
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
  governmentid: {
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
  events: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model("User", userSchema)
module.exports = User
