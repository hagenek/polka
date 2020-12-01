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
    res.send(events)
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

// router.delete("/participant", deleteParticipant)

router.delete("/:id", (req, res, userId) => {
  try {
    console.log("hello from router delete")
    const { id } = req.params;
    Event.splice(participants.findIndex(participant => participant.id === id), 1);
    res.status(204).end();
  } catch (error) {
    res.status(400).json('Failed to delete user.');
  }
})

module.exports = router
