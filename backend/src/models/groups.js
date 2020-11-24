const mongoose = require("mongoose")

const { Schema } = mongoose

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  members: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  objectId: {
    type: String,
    required: true,
  },
})

const Group = mongoose.model("Group", groupSchema)
module.exports = Group
