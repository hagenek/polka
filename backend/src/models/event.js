const mongoose = require("mongoose")

const { Schema } = mongoose

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  participants: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event
