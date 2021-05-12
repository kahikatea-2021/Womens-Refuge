exports.up = function (knex) {
  return knex.schema.createTable('regions', table => {
    table.increments('id').primary()
    table.string('island')
    table.string('region')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('regions')
}
