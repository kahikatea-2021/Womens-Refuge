import request from 'superagent'
import { getState } from '../store'
const acceptJsonHeader = 'application/json'
const rootUrl = '/api/v1/houses/'

// Host can edit information about their house
export function editHouse (houseId, house) {
  const user = getState(state => state.user)
  console.log(user)
  return request.patch(rootUrl + houseId)
    .accept(acceptJsonHeader)
    .set({ authorization: user.token })
    .send(house)
    .then(res => res.body)
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
