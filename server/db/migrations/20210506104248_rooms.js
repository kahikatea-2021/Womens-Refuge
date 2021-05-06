exports.up = function (knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments('id').primary()
    table.int('house_id').references('houses.id')
    table.string('descripton')
    table.boolean('available')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
