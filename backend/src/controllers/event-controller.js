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
            { $addToSet: { participants: userId } },
            { useFindAndModify: false }
        )
        await User.findByIdAndUpdate(
            userId,
            { $addToSet: { events: eventId } },
            { useFindAndModify: false }
        )
        res.json(userId).status(201).end()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

const deleteParticipant = async (req, res) => {
    const { eventId, userId } = req.body
    console.log("hello", eventId, userId)
    try {

        if (!eventId || !userId) {
            res.status(400).send("Error: missing property")
        }

        await Event.updateOne(
            {eventId: eventId},
            { $pull: { participants: eventId } },
        )
        await User.updateOne(
            {userId: userId},
            { $pull: { events: userId } },
        )
        res.json(userId).status(201).end()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

module.exports = {
    addParticipant,
    deleteParticipant,
}