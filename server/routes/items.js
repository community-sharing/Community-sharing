var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getItems().then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.get('/:id', function (req, res) {
  var id = req.params.id
  db.getItem(id).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
