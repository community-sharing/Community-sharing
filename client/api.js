const request = require('superagent')
const url = require('url')
const config = require('../config')

var urlPath = url.format(config)

const getListings = (callback) => {
  request
    .get(urlPath + "/items/")
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

const getUsers = (callback, email) => {
  request
    .get(urlPath + "/user/"+email)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body[0])
      }
    })
}

const registerUser = (callback, formData) => {
  request
    .post(urlPath + "/saveUser")
    .set('Content-Type', 'application/json')
    .send(formData)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, "Status: 200")
      }
    })
}

const getNewItem = (callback, lendData) => {
  request
    .post(urlPath + "/saveItem")
    .set('Content-Type', 'application/json')
    .send(lendData)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, "Status: 200")
      }
    })
}

module.exports = { getListings, getUsers, registerUser, getNewItem }
