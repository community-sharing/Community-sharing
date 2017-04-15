var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/', function (req, res) {
  var user = req.body
  db.saveUser(user).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
