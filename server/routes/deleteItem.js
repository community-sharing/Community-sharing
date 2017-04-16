var express = require('express')
var router = express.Router()

var db = require('../db')

router.delete('/:id', function (req, res) {
  var id = req.params.id
  db.deleteItem(id).then((result) => {
    res.sendStatus(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
