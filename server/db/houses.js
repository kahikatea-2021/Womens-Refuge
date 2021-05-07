const connection = require('./connection')

// when a user searches for a specific house name, that house is returned
function getHouseByName (name, db = connection) {
  return db('houses')
    .where('name', '=', name)
}

// when a user clicks on a house to view the house details
function getHouseById (id, db = connection) {
  return db('houses')
    .where('id', '=', id)
}

function genearlQuery (island, regions, exclude, db = connection) {
  console.log(regions, exclude, island)
  if (island === 'all') island = '%'
  let query = 'SELECT *, COUNT(houses.id) as rooms_available ' +
  'FROM houses JOIN rooms on houses.id = rooms.house_id ' +
  'JOIN regions on houses.region_id = regions.id ' +
  `WHERE LOWER(regions.island) LIKE "${island.toLowerCase()}" `

  if (regions.length > 0) {
    query += 'AND LOWER(regions.region) IN (' + regions.map(region => `"${region.toLowerCase()}"`).join(' ,') + ') '
  }

  if (exclude.length > 0) {
    query += 'AND LOWER(regions.region) NOT IN (' + exclude.map(region => `"${region.toLowerCase()}"`).join(' ,') + ') '
  }

  query += 'GROUP BY houses.id '
  return db.raw(query)
}

function updateHouseById (houseId, house, db = connection) {
  return db('houses')
    .update(house)
    .where('id', '=', houseId)
}

function addHouse (house, db = connection) {
  return db('houses')
    .insert(house)
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
