const express = require('express');
const router = express.Router();
const { checkDuplicateUsernameOrEmail } = require("../middleware/verifySignUp");
const controller = require("../controllers/auth-controller");

router
  .post('/', checkDuplicateUsernameOrEmail, (req, res) => {
    controller.signup(req, res)
  })

module.exports = router;

// module.exports = app => {
//   app.use((req, res, next) => {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.post("/api/auth/signup", [verifySignUp], (req, res) => {
//     controller.signup
//   })
//   app.post("/api/auth/signin", (req, res) => {
//     controller.signin
//   })
  // app.post(
  //   "/api/auth/signup",
  //   [
  //     verifySignUp
  //   ],
  //   controller.signup
  // );
  // app.post("/api/auth/signing", controller.signin);
// };