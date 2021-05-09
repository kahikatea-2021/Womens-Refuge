import request from 'superagent'
const acceptJsonHeader = 'application/json'
const baseURL = 'api/v1/rooms/'

// export function getAllRoomsInHouse (houseId) {
//   return request.get(baseURL + `house/${houseId}/rooms`)
//     .then(res => {
//       return res.body
//     })
// }

export function addRoom (room) {
  return request.post(baseURL)
    .send(room)
}

export function editRoom (roomId, available) {
  console.log('hitting the api', roomId, available)
  return request.patch(baseURL + `${roomId}/availability`)
    .accept(acceptJsonHeader)
    .send({ available: available })
    .then(res => res.body)
}
