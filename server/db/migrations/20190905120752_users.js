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
    table.increments('id')
    table.string('email')
    table.blob('password')
    table.boolean('isAdmin')
    table.boolean('isHost')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
