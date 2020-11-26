const express = require('express');

const { createChat, addMessage, getChatById } = require('../controllers/chat-controller');

const router = express.Router();

router.post('/', createChat);

router.post('/message', addMessage);

router.get('/:id', getChatById);

module.exports = router;