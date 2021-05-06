const connection = require('./connection')

// Get every house in the database
function getRoomById (id, db = connection) {
  return db('rooms')
    .where('id', '=', id)
}

// when a user searches for a specific house name, that house is returned
function getRoomsByHouse (name, db = connection) {
  return db('houses')
    .where('name', '=', name)
}

function updateRoomDescription (roomId, updateDescription, db = connection) {
  return db('rooms')
    .where('id', '=', roomId)
    .update({
      description: updateDescription
    })
}

function updateRoomAvailability (roomId, updateAvailable, db = connection) {
  return db('rooms')
    .where('id', '=', roomId)
    .update({
      available: updateAvailable
    })
}

module.exports = {
  getRoomsByHouse,
  getRoomById,
  updateRoomDescription,
  updateRoomAvailability
}
