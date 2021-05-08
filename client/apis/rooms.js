import request from 'superagent'

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
