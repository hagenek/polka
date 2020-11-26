const express = require("express")
const Event = require("../models/event")

const router = new express.Router()

router.post("/groups", async (req, res) => {
  console.log(req.body)

  const { name, description } = req.body
  const group = new Event({
    name,
    description,
  })
  await event.save(function (err) {
    if (err) return console.error(err)
  })

  Event.find((err, groups) => {
    if (err) return console.error(err)
    res.send(event)
  })
})

router.get("/events", async (req, res) => {
  Event.find((err, groups) => {
    if (err) return console.error(err)
    res.send(event)
  })
})

router.get("/events/:name", async (req, res) => {
  const searchQuery = req.params.name
  const data = await Event.find({ name: `${searchQuery}` })
  res.send(data)
})

module.exports = router
