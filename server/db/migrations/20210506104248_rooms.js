exports.up = function (knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments('id').primary()
<<<<<<< HEAD
    table.integer('house_id')
    table.foreign('house_id').references('houses.id').onDelete('CASCADE')
||||||| 92aaee2
    table.int('house_id').references('houses.id')
=======
    table.integer('house_id').references('houses.id').onDelete('CASCADE')
>>>>>>> e19b972d4f2609dbeba0db3c1865f22de8b8f86b
    table.string('description')
    table.boolean('available')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rooms')
}
