const express = require("express")

const {
  createChat,
  addMessage,
  getChatById,
  getChatsByUserId,
} = require("../controllers/chat-controller")

const router = express.Router()

router.post("/", createChat)

router.post("/message", addMessage)

router.get("/:id", getChatById)

router.get("/user/:id", getChatsByUserId)

module.exports = router
