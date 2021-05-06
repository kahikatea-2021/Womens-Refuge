// exports.up = function (knex) {
//   return knex.schema.createTable('fruit', table => {
//     table.increments('id')
//     table.string('name')
//   })
// }

// exports.down = function (knex) {
//   return knex.schema.dropTable('fruit')
// }
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('id')
    table.string('email')
    table.boolean('isMasterAdmin')
    table.boolean('isRefugeCoordinator')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
