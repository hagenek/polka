const express = require('express');
// const { registerUser } = require('../controllers/user-controller');
const router = express.Router();
const { verifyToken } = require("../middleware/authJwt");
const controller = require("../controllers/user-controller");

router
  .get('/', [verifyToken], controller.userBoard)

// router
//   .post('/', registerUser);

module.exports = router;


// module.exports = app => {
//   app.use((req, res, next) => {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });
//   app.get("/api/test/all");
//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
// }