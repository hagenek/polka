const express = require("express")
const User = require("../models/user")

const router = new express.Router()

router.post("/users", async (req, res) => {
  console.log(req.body)

  const { username, password, firstName, lastName } = req.body
  const user = new User({
    username,
    password,
    firstName,
    lastName,
  })
  await user.save(function (err, user) {
    if (err) return console.error(err)
  })

  User.find((err, users) => {
    if (err) return console.error(err)
    res.send(users)
  })
})
router.get("/users", async (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err)
    res.send(users)
  })
})

module.exports = router
