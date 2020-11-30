const mongoose = require("mongoose")
const Event = require("../models/event")
const User = require("../models/user")

const addParticipant = async (req, res) => {
    const { eventId, userId } = req.body
    console.log(eventId, userId)
    try {

        if (!eventId || !userId) {
            res.status(400).send("Error: missing property")
        }

        await Event.findByIdAndUpdate(
            eventId,
            { $push: { members: userId } },
            { useFindAndModify: false }
        )
        await User.findByIdAndUpdate(
            userId,
            { $push: { events: eventId } },
            { useFindAndModify: false }
        )
        res.json(userId).status(201).end()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}
module.exports = {
    addParticipant,
}