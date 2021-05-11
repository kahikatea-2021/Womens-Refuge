import request from 'superagent'
import getAccessHeader from './tokenHelper'

const acceptJsonHeader = 'application/json'
const rootUrl = '/api/v1/houses/'

// Host can edit information about their house
export function editHouse (houseId, house) {
  return request.patch(rootUrl + houseId)
    .accept(acceptJsonHeader)
    .set(getAccessHeader())
    .send(house)
    .then(res => res.body)
}

export function addHouse (house) {
  return request.post(rootUrl)
    .send(house)
    .set(getAccessHeader())
}

export function getAllRoomsInHouse (houseId) {
  return request.get(rootUrl + `house/${houseId}/rooms`)
    .set(getAccessHeader())
    .then(res => {
      return res.body
    })
}


export function deleteHouse (houseId) {
  return request.delete(rootUrl + houseId)
    .set(getAccessHeader())
}

export default function getHousesFromSearch (str) {
  console.log('api', rootUrl + str)
  return request.get(rootUrl + str)
    .set(getAccessHeader())
    .then(res => {
      return res.body
    })
}
