const connection = require('./connection')

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

module.exports = {
  getIslandRegions
}
