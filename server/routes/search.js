var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:searchString', function (req, res) {
  var searchString = req.params.searchString
  db.getSearchItems(searchString).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
