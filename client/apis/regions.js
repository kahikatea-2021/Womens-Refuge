import request from 'superagent'
const rootUrl = '/api/v1/houses/'

// Get all the houses
export function getAllHouses (house) {
  return request.get(rootUrl)
    .query({ house: house })
    .then(res => {
      return res.body
    })
}

// Get all the houses in a particular region
export function getHousesInRegion (region) {
  return request.get(rootUrl)
    .query({ region: region })
    // .accept(acceptJsonHeader)
    .then(res => {
      return res.body
    })
}

// Get a house
export function getHouse (house) {
  return request.get(rootUrl + 'house/' + house)
    .then(res => {
      console.log(res.body[0])
      return res.body[0]
    })
}
