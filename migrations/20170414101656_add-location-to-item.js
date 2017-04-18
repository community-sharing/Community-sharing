
exports.up = function (knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.string('location')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.dropColumn('location')
  })
}
