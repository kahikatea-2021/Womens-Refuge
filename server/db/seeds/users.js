exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 'auth0|60937c2f9cf71b006912ec0a', email: 'j.pinfold@gmail.com', isMasterAdmin: false, isRefugeCoordinator: true },
        { id: 2, email: 'host@example.org', password: '21', isAdmin: false, isHost: true }
      ])
    })
}
