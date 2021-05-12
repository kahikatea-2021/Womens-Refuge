exports.seed = function (knex) {
  // Inserts seed entries
  return knex('regions').insert([
    { id: 1, island: 'north', region: 'Northland' },
    { id: 2, island: 'north', region: 'Auckland' },
    { id: 3, island: 'north', region: 'Bay of Plenty' },
    { id: 4, island: 'north', region: 'Waikato' },
    { id: 5, island: 'north', region: 'Gisborne' },
    { id: 6, island: 'north', region: 'Taranaki' },
    { id: 7, island: 'north', region: "Hawke's Bay" },
    { id: 8, island: 'north', region: 'Whanganui - Manawatu' },
    { id: 9, island: 'north', region: 'Wellington' },
    { id: 10, island: 'south', region: 'Nelson' },
    { id: 11, island: 'south', region: 'Marlborough' },
    { id: 12, island: 'south', region: 'Canterbury' },
    { id: 13, island: 'south', region: 'West Coast' },
    { id: 14, island: 'south', region: 'Otago' },
    { id: 15, island: 'south', region: 'Southland' }
  ])
}
