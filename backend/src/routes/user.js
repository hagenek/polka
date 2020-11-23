const User = require('../models/user')
const express = require('express')
const router = new express.Router()

router.post("/user", async (req, res) => {
  console.log(req.body);

  const { username, password, firstname, lastname } = req.body
  const user = new User({
    username,
    password,
    firstname,
    lastname,
  })
  await user.save(function (err, user) {
    if (err) return console.error(err);
  });

  User.find((err, users) => {
    if (err) return console.error(err)
    res.send(users)
  })

});

module.exports = router;