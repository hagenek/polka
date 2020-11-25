const express = require("express")

const router = express.Router()
const { signin } = require("../controllers/auth-controller")

router.post("/", (req, res) => {
  signin(req, res)
})

module.exports = router
