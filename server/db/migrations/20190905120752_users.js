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
