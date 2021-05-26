exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([
    { id: 'auth0|609a19f858f57300728a83a3', email: 'admin@safehouse.com', isAdmin: true, isRefugeCoordinator: false, house_id: null },
    { id: 'auth0|6094708749cdbd006b842fa3', email: 'refugecoordinator@safehouse.com', isAdmin: false, isRefugeCoordinator: true, house_id: 1 },
    { id: 'auth0|6094723849cdbd006b842fc5', email: 'generaluser@safehouse.com', isAdmin: false, isRefugeCoordinator: false, house_id: null }

  ])
}
