const connection = require('./connection')

const baseQuery = 'SELECT island,region, regions.id as region_id, name, phone_1, phone_2, notes, houses.id as house_id, COUNT(*) as rooms_available, SUM(CASE WHEN rooms.available = true THEN 1 ELSE 0 END) as available_rooms ' +
  'FROM houses LEFT JOIN rooms on houses.id = rooms.house_id ' +
  'LEFT JOIN regions on houses.region_id = regions.id '

// when a user searches for a specific house name, that house is returned
function getHouseByName (name, db = connection) {
  const query = 'SELECT *,houses.id as houseId, rooms.id as room_id ' +
    'FROM houses LEFT JOIN rooms on houses.id = rooms.house_id ' +
    'LEFT JOIN regions on houses.region_id = regions.id ' +
    `WHERE name = "${name}"`
  return db.raw(query)
    .then(result => {
      return result.rows ? result.rows : result
    })
}

// when a user clicks on a house to view the house details
function getHouseById (id, db = connection) {
  const query = 'SELECT *,houses.id as houseId, rooms.id as room_id ' +
    'FROM houses LEFT JOIN rooms on houses.id = rooms.house_id ' +
    'LEFT JOIN regions on houses.region_id = regions.id ' +
    `WHERE houses.id = ${id}`
  return db.raw(query)
    .then(result => {
      return result.rows ? result.rows : result
    })
}

function genearlQuery (island = 'all', regions = [], exclude = [], available = 1, db = connection) {
  if (island === 'all') island = '%'
  let query = baseQuery +
    `WHERE LOWER(regions.island) LIKE '${island.toLowerCase()}' `

  if (regions.length > 0) {
    query += 'AND LOWER(regions.region) IN (' + regions.map(region => `'${region.toLowerCase()}'`).join(' ,') + ') '
  }

  if (exclude.length > 0) {
    query += 'AND LOWER(regions.region) NOT IN (' + exclude.map(region => `'${region.toLowerCase()}'`).join(' ,') + ') '
  }

  query += 'GROUP BY houses.id, regions.id, island, region, name, phone_1, phone_2, notes, rooms.house_id '

  if (available === 2) {
    query += 'HAVING available_rooms > 0 '
  }
  if (available === 0) {
    query += 'HAVING COUNT(rooms.house_id) = 0 '
  }

  return db.raw(query)
    .then(results => {
      return results.rows ? results.rows : results
    })
}

function updateHouseById (houseId, house, db = connection) {
  return db('houses')
    .update(house)
    .where('id', '=', houseId)
}

function addHouse (house, db = connection) {
  return db('houses')
    .insert(house, 'id')
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
