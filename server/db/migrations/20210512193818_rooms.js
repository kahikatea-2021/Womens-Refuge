exports.up = function (knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments('id').primary()
    table.integer('house_id')
    table.foreign('house_id').references('houses.id').onDelete('CASCADE')
    table.string('description')
    table.boolean('available')
    table.integer('single_beds')
    table.integer('double_beds')
    table.integer('queen_beds')
    table.integer('king_beds')
    table.integer('bunk_beds')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
