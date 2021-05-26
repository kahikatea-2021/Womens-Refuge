const connection = require('./connection')

// Get every house in the database
function getRoomById (id, db = connection) {
  return db('rooms')
    .where('id', '=', id)
}

function updateHouseAndRooms (rooms, house, db = connection) {
  // let query = `UPDATE houses SET phone_1=${house.phone_1}, phone_2=${house.phone_2}, notes="${house.notes}" WHERE id=${house.id}; `
  // let query = 'UPDATE rooms SET description="fucks", available=1 WHERE id=1; UPDATE rooms SET description="sucks", available=1 WHERE id=2;'
  // rooms.forEach(room => {
  //   query += `UPDATE rooms SET description="${room.description}", available=${room.available} WHERE id=${room.id}; `
  // })
  // console.log(query)

  return db.transaction(trx => {
    const queries = []
    const houseQuery = db('houses').update({ phone_1: house.phone_1, phone_2: house.phone_2, notes: house.notes })
      .where('id', '=', house.id)
      .transacting(trx)
    queries.push(houseQuery)
    rooms.forEach(room => {
      const query = db('rooms')
        .update({
          description: room.description,
          available: room.available
        })
        .where('id', '=', room.id)
        .transacting(trx)

      queries.push(query)
    })

    Promise.all(queries)
      .then(trx.commit)
      .catch(trx.rollback)
  })
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
