exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 'auth0|609471b258f57300728a1357', email: 'masteradmin@safehouse.com', isMasterAdmin: true, isRefugeCoordinator: false, house_id: null },
        { id: 'auth0|6094708749cdbd006b842fa3', email: 'refugecoordinator@safehouse.com', isMasterAdmin: false, isRefugeCoordinator: true, house_id: 1 },
        { id: 'auth0|6094723849cdbd006b842fc5', email: 'generaluser@safehouse.com', isMasterAdmin: false, isRefugeCoordinator: false, house_id: null }

      ])
    })
}
