exports.up = function (knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments('id')
    table.int('house_id')
    table.string('descripton')
    table.boolean('available')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
