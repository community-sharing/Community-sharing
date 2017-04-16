
exports.up = function(knex, Promise) {
  return knex.schema.createTable('loans', function (table) {
    table.increments('loan_id').primary()
    table.integer('lenders_id').references("users.user_id")
    table.integer('borrowers_id').references("users.user_id")
    table.integer('item_id').references("items.item_id")
    table.datetime('pickup')
    table.datetime('dropoff')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('loans')
};
