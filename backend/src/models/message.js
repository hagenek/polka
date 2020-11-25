const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});

const Message = mongoose.model("Message", messageSchema)

module.exports.default = Message
