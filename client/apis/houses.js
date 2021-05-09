import request from 'superagent'
import { accessHeader } from './tokenHelper'

const acceptJsonHeader = 'application/json'
const rootUrl = '/api/v1/houses/'

// Host can edit information about their house
export function editHouse (houseId, house) {
  return request.patch(rootUrl + houseId)
    .accept(acceptJsonHeader)
    .set(accessHeader)
    .send(house)
    .then(res => res.body)
}

export function addHouse (house) {
  return request.post(rootUrl)
    .send(house)
    .set(accessHeader)
}

export function getAllRoomsInHouse (houseId) {
  return request.get(rootUrl + `house/${houseId}/rooms`)
    .set(accessHeader)
    .then(res => {
      return res.body
    })
}
