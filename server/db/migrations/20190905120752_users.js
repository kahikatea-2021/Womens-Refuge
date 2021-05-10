exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary()
    table.unique('id')
    table.string('email')
    table.boolean('isMasterAdmin')
    table.boolean('isRefugeCoordinator')
<<<<<<< HEAD
    table.integer('house_id')
    table.foreign('house_id').references('houses.id').onDelete('SET NULL')
||||||| 92aaee2
    table.int('house_id').references('houses.id')
=======
    table.integer('house_id').references('houses.id')
>>>>>>> e19b972d4f2609dbeba0db3c1865f22de8b8f86b
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
