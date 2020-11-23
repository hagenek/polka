const Country = require('../models/country')
const express = require('express')
const router = new express.Router()

router.get("/countries", async (req, res) => {

  const countries = Country.find()

});