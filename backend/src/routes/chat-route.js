const express = require('express');

const { createChat } = require('../controllers/chat-controller');

const router = express.Router();

router.post('/', async (req, res) => {
  
  //createChat(req, res, membersIds);
  res.send("hello")
});

router.get('/', async (req, res) => {

  //createChat(req, res, membersIds);
  res.send("hello")
});

module.exports = router;