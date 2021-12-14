import request from 'superagent'
import getAccessHeader from './tokenHelper'
const acceptJsonHeader = 'application/json'
const baseURL = 'api/v1/rooms/'

// export function getAllRoomsInHouse (houseId) {
//   return request.get(baseURL + `house/${houseId}/rooms`)
//     .then(res => {
//       return res.body
//     })
// }

export function addRoom (room) {
  console.log('api: ', room)
  return request.post(baseURL)
    .set(getAccessHeader())
    .send(room)
}

export function editRoom (roomId, available) {
  return request.patch(baseURL + `${roomId}/availability`)
    .accept(acceptJsonHeader)
    .set(getAccessHeader())
    .send({ available: available })
    .then(res => res.body)
}
