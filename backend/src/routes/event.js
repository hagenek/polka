const express = require("express")
const Event = require("../models/event")
const { addParticipant } = require("../controllers/event-controller")

const router = new express.Router()

router.post("/", async (req, res) => {
  console.log(req.body)

  const { name, description } = req.body
  const event = new Event({
    name,
    description,
  })
  await event.save(function (err) {
    if (err) return console.error(err)
  })

  Event.find((err, events) => {
    if (err) return console.error(err)
    res.send(event)
  })
})

router.get("/", async (req, res) => {
  Event.find((err, events) => {
    if (err) return console.error(err)
    res.send(events)
  })
})

router.get("/:name", async (req, res) => {
  const searchQuery = req.params.name
  const data = await Event.find({ name: `${searchQuery}` })
  res.send(data)
})

router.put("/participant", addParticipant)

module.exports = router
