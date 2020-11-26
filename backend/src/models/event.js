const mongoose = require("mongoose")

const { Schema } = mongoose

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  participants: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event
