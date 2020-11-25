const express = require('express');

const { createChat, addMessage } = require('../controllers/chat-controller');

const router = express.Router();

router.post('/', createChat);

router.post('/message', addMessage);

module.exports = router;