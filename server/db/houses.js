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

module.exports = {
  getAllHouses,
  getAllRegionalHouses,
  getHouseById,
  getHouseByName,
  excludeRegions,
  genearlQuery
}
