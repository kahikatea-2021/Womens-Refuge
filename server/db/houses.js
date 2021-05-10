const connection = require('./connection')

const baseQuery = 'SELECT *, COUNT(houses.id) as rooms_available ' +
  'FROM houses JOIN rooms on houses.id = rooms.house_id ' +
  'JOIN regions on houses.region_id = regions.id '

// when a user searches for a specific house name, that house is returned
function getHouseByName (name, db = connection) {
  const query = 'SELECT *, rooms.id ' +
    'FROM houses JOIN rooms on houses.id = rooms.house_id ' +
    'JOIN regions on houses.region_id = regions.id ' +
    `WHERE name = "${name}"`
  return db.raw(query)
}

// when a user clicks on a house to view the house details
function getHouseById (id, db = connection) {
  const query = 'SELECT *, rooms.id ' +
    'FROM houses JOIN rooms on houses.id = rooms.house_id ' +
    'JOIN regions on houses.region_id = regions.id ' +
    `WHERE houses.id = ${id} `
  return db.raw(query)
}

function genearlQuery (island, regions, exclude, db = connection) {
  console.log(regions, exclude, island)
  if (island === 'all') island = '%'
  let query = baseQuery +
    `WHERE LOWER(regions.island) LIKE "${island.toLowerCase()}" `

  if (regions.length > 0) {
    query += 'AND LOWER(regions.region) IN (' + regions.map(region => `"${region.toLowerCase()}"`).join(' ,') + ') '
  }

  if (exclude.length > 0) {
    query += 'AND LOWER(regions.region) NOT IN (' + exclude.map(region => `"${region.toLowerCase()}"`).join(' ,') + ') '
  }

  query += 'GROUP BY houses.id '
  console.log(query)
  return db.raw(query)
}

function updateHouseById (houseId, house, db = connection) {
  return db('houses')
    .update(house)
    .where('id', '=', houseId)
}

function addHouse (house, db = connection) {
  console.log('add a house', house)
  return db('houses')
    .insert(house)
    .then(ids => {
      house.id = ids[0]
      return house
    })
}

function deleteHouseById (houseId, db = connection) {
  return db('houses')
    .del()
    .where('id', '=', houseId)
}

module.exports = {
  getHouseById,
  getHouseByName,
  genearlQuery,
  updateHouseById,
  addHouse,
  deleteHouseById
}
