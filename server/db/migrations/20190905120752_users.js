exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary()
    table.unique('id')
    table.string('email')
    table.boolean('isAdmin')
    table.boolean('isRefugeCoordinator')
    table.integer('house_id')
    table.foreign('house_id').references('houses.id').onDelete('SET NULL')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
