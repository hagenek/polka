const User = require('../models/user')
const express = require('express')
const router = new express.Router()

router.post("/user", async (req, res) => {
  console.log(req.body);

  const country = new Country({name: req.body.name, description: "land in the North", ally: true,})
  await country.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  Country.find((err, countries) => {
    if (err) return console.error(err)
    res.send(countries)
  })

});

module.exports = router;