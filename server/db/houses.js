const connection = require('./connection')

// Get every house in the database
function getAllHouses (db = connection) {
  return db('houses')
}

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

// Get every region in a particular island
function getIslandRegions (island, db = connection) {
  if (island === 'all') {
    island = '%'
  } else {
    island = '%' + island + '%'
  }
  return db('regions')
    .where('island', 'like', island)
    .distinct('region', 'island')
}

// Get every house in a region
function getAllRegionalHouses (region, db = connection) {
  return db('houses')
    .join('regions', 'regions.id', 'houses.region_id')
    .where('region', '=', region)
}

module.exports = {
  getAllHouses,
  getAllRegionalHouses,
  getIslandRegions,
  getHouseById,
  getHouseByName
}
