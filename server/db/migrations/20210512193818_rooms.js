exports.up = function (knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments('id').primary()
    table.integer('house_id')
    table.foreign('house_id').references('houses.id').onDelete('CASCADE')
    table.string('description')
    table.boolean('available')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
