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
    .where(db.raw('LOWER(region)'), '=', region.toLowerCase())
}

// exclude houses from selected regions
function excludeRegions (regions, db = connection) {
  return db('regions')
    .join('houses', 'regions.id', 'region_id')
    .whereNotIn(db.raw('LOWER(region)'), regions.toLowerCase())
}

function genearlQuery (island, regions, exclude, db = connection) {
  console.log(regions, exclude, island)
  if (island === 'all') island = '%'
  let query = db('houses')
    .join('regions', 'houses.region_id', 'regions.id')
    .where('regions.island', 'like', island)

  if (regions.length > 0) {
    query = query.whereIn(db.raw('LOWER(region)'), regions.map(region => region.toLowerCase()))
  }
  if (exclude.length > 0) {
    query = query.whereNotIn(db.raw('LOWER(region)'), exclude.map(region => region.toLowerCase()))
  }
  return query
}

module.exports = {
  getAllHouses,
  getAllRegionalHouses,
  getHouseById,
  getHouseByName,
  excludeRegions,
  genearlQuery
}
