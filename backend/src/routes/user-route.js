const express = require("express")

const router = express.Router()
const { verifyToken } = require("../middleware/authJwt")
const { userBoard, getUser, addUser, getAllUsers, updateUser } = require("../controllers/user-controller")

router.get("/", verifyToken, userBoard)
router.patch("/:id", updateUser)
router.get("/all", getAllUsers);
router.get('/:id', getUser);
router.post("/user", addUser);

module.exports = router
