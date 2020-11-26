const express = require("express")
const Group = require("../models/group")

const router = new express.Router()

router.post("/groups", async (req, res) => {
  console.log(req.body)

  const { name, description } = req.body
  const group = new Group({
    name,
    description,
  })
  await group.save(function (err) {
    if (err) return console.error(err)
  })

  Group.find((err, groups) => {
    if (err) return console.error(err)
    res.send(groups)
  })
})
router.get("/groups", async (req, res) => {
  Group.find((err, groups) => {
    if (err) return console.error(err)
    res.send(groups)
  })
})

router.get("/groups/:name", async (req, res) => {
  const searchQuery = req.params.name
  const data = await Group.find({ name: `${searchQuery}` })
  res.send(data)
})

module.exports = router
