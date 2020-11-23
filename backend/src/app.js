const express = require("express")
const createError = require("http-errors")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")
require('dotenv').config()
require('./db/mongoose')

const indexRouter = require("./routes/index")
const countryRouter = require("./routes/country")
const userRouter = require("./routes/user")

const errorHandler = require("./middleware/errorHandler")

const app = express()

app.use(helmet()) // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use("/", userRouter)
app.use("/", countryRouter)
app.use("/", indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound())
})

// pass any errors to the error handler
app.use(errorHandler)

module.exports = app
