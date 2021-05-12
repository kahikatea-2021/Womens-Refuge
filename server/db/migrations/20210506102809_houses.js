exports.up = async function (knex) {
  await knex.schema.createTable('houses', table => {
    table.increments('id').primary()
    table.integer('region_id').references('regions.id')
    table.string('name')
    table.string('phone_1')
    table.string('phone_2')
    table.string('notes')
  })

  await knex.schema.alterTable('users', table => {
    table.foreign('house_id').references('houses.id').onDelete('SET NULL')
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable('users', table => {
    table.dropForeign('house_id')
  })
  await knex.schema.dropTable('houses')
}
