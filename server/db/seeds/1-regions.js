exports.seed = function (knex) {
  // Inserts seed entries
  return knex('regions').insert([
    { island: 'north', region: 'Northland' },
    { island: 'north', region: 'Auckland' },
    { island: 'north', region: 'Bay of Plenty' },
    { island: 'north', region: 'Waikato' },
    { island: 'north', region: 'Gisborne' },
    { island: 'north', region: 'Taranaki' },
    { island: 'north', region: "Hawke's Bay" },
    { island: 'north', region: 'Whanganui - Manawatu' },
    { island: 'north', region: 'Wellington' },
    { island: 'south', region: 'Nelson' },
    { island: 'south', region: 'Marlborough' },
    { island: 'south', region: 'Canterbury' },
    { island: 'south', region: 'West Coast' },
    { island: 'south', region: 'Otago' },
    { island: 'south', region: 'Southland' }
  ])
}
