import request from 'superagent'

const baseURL = 'api/v1/houses/'

export function getAllRoomsInHouse (houseId) {
  return request.get(baseURL + `house/${houseId}/rooms`)
    .then(res => {
      return res.body
    })
}
