const connection = require('./connection')

// Get every house in the database
function getRoomById (id, db = connection) {
  return db('rooms')
    .where('id', '=', id)
}

function updateHouseAndRooms (rooms, house, db = connection) {
  let query = `UPDATE houses SET phone_1=${house.phone_1} phone_2=${house.phone_2} notes="${house.notes}" WHERE id=${house.id}; `
  rooms.forEach(room => {
    query += `UPDATE rooms SET description="${room.description}", available=${room.available} WHERE id=${room.id}; `
  })

  return db.raw(query)
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
  deleteRoom,
  updateHouseAndRooms
}
