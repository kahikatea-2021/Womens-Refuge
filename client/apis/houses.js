import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1/houses/'

// Host can edit information about their house
export function editHouse (houseId) {
  return request.patch(rootUrl + houseId)
    .accept(acceptJsonHeader)
    .send(houseId)
    .then(res => res.body.house)
}

export function addHouse (house) {
  return request.post(rootUrl)
    .send(house)
}

export function getAllRoomsInHouse (houseId) {
  return request.get(rootUrl + `house/${houseId}/rooms`)
    .then(res => {
      return res.body
    })
}
