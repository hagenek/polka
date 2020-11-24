require("dotenv").config();
const express = require("express")
const createError = require("http-errors")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const indexRouter = require("./routes/index")
const userRouter = require('./routes/user-route');

const errorHandler = require("./middleware/errorHandler")

const app = express()

app.use(helmet()) // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use("/", countryRouter)
app.use("/", indexRouter)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound())
})

// pass any errors to the error handler
app.use(errorHandler)

module.exports = app
