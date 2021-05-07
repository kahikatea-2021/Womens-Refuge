const connection = require('./connection')

// Get every region in a particular island
function getIslandRegions (island, db = connection) {
  if (island === 'all') {
    island = '%'
  }

  return db('regions')
    .where(db.raw('LOWER(island)'), 'like', island.toLowerCase())
    .distinct('region', 'island')
}

module.exports = {
  getIslandRegions
}
