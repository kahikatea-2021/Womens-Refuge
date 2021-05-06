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

// Get every house in a region houses
function getAllRegionalHouses (region, db = connection) {
  return db('houses')
    .join('regions', 'regions.id', 'houses.region_id')
    .where('region', '=', region)
}

// exclude houses from selected regions
function excludeRegions (regions, db = connection) {
  return db('regions')
    .join('houses', 'regions.id', 'region_id')
    .whereNotIn('region', regions)
}

module.exports = {
  getAllHouses,
  getAllRegionalHouses,
  getHouseById,
  getHouseByName,
  excludeRegions
}
