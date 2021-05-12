exports.up = function (knex) {
  return knex.schema.createTable('houses', table => {
    table.increments('id').primary()
    table.integer('region_id').references('regions.id')
    table.string('name')
    table.string('phone_1')
    table.string('phone_2')
    table.string('notes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('houses')
}
