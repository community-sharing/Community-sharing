var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getItems,
  getItem,
  getUser,
  getLoanItems,
  getLoanedItems,
  getBorrowedItems,
  saveItem,
  saveUser,
  deleteItem,
  saveLoan
}

function getItems () {
  return knex('items').select()
}

function getItem (id) {
  return knex('items').where('item_id', id)
  .join('users', 'owner_id', 'user_id')
}

function getUser (email) {
  return knex('users').where('email', email)

}

function getLoanItems (id) {
  return knex('items').where('owner_id', id)
}

function getLoanedItems (id) {
  return knex('items').where('owner_id', id)
  .join('loans', 'owner_id' , 'lenders_id')
  .join('users', 'borrowers_id', 'user_id')
}

function getBorrowedItems (id) {
  return knex('loans').where('borrowers_id', id)
  .join('items', 'lenders_id' , 'owner_id')
  .join('users', 'owner_id', 'user_id')
}

function saveItem (item) {
   return knex.insert(item).into('items')
}

function saveUser (user) {
   return knex.insert(user).into('users')
}

function deleteItem (id) {
   return knex('items').where('item_id', id).del()
}

function saveLoan (loanRequest) {
   return knex.insert({
     borrowers_id: loanRequest.user_id,
     lenders_id: loanRequest.owners_id,
     item_id: loanRequest.item_id,
     pickup: loanRequest.pickup,
     dropoff: loanRequest.dropoff
   }).into('loans')
}
