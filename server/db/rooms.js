const connection = require('./connection')

// Get every house in the database
function getRoomById (id, db = connection) {
  return db('rooms')
    .where('id', '=', id)
}

// when a user searches for a specific house name, that house is returned
function getRoomsByHouse (name, db = connection) {
  return db('houses')
    .join('rooms', 'house_id', 'houses.id')
    .where('name', '=', name)
}

function getRoomsByHouseId (houseId, db = connection) {
  return db('houses')
    .join('rooms', 'house_id', 'houses.id')
    .where('houses.id', '=', houseId)
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

function addRooms (rooms, db = connection) {
  return db('rooms')
    .insert(rooms)
}

function deleteRoom (roomId, db = connection) {
  return db('rooms')
    .del()
    .where('id', '=', roomId)
}

module.exports = {
  getRoomsByHouse,
  getRoomById,
  updateRoomDescription,
  updateRoomAvailability,
  getRoomsByHouseId,
  addRooms,
  deleteRoom
}
