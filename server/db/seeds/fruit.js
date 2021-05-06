exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'admin@example.org', password: '21', isAdmin: true, isHost: false },
        { id: 2, email: 'host@example.org', password: '21', isAdmin: false, isHost: true },
        { id: 2, email: 'police@example.org', password: '21', isAdmin: false, isHost: false }
      ])
    })
}
