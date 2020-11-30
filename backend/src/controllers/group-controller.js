const mongoose = require("mongoose")
const Group = require("../models/group")

const addMember = async (req, res) => {
    const { groupId, userId } = req.body
    console.log(groupId, userId)
    try {

        if (!groupId || !userId) {
            res.status(400).send("Error: missing property")
        }

        await Group.findByIdAndUpdate(
            groupId,
            { $push: { members: userId } },
            { useFindAndModify: false }
        )
        res.json(userId).status(201).end()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}
module.exports = {
    addMember,
}