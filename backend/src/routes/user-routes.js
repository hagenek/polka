const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middleware/authJwt");
const { userBoard } = require("../controllers/user-controller");

router
  .get('/', verifyToken, userBoard)

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