exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('id')
    table.string('email')
    table.boolean('isMasterAdmin')
    table.boolean('isRefugeCoordinator')
    table.integer('house_id').references('houses.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
