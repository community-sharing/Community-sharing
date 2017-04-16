var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:email', function (req, res) {
  
  var email = req.params.email

  db.getUser(email).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
