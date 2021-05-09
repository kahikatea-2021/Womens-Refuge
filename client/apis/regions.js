import request from 'superagent'
const rootUrl = '/api/v1/houses/'

export function getAllRegions (island) {
  return request.get('/api/v1/regions')
    .query({ island: island })
    .then(res => {
      return res.body
    })
}

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
  return request.get(rootUrl + 'name/' + house)
    .then(res => {
      console.log('thed', res.body)
      return res.body
    })
}

export function getHouseById (id) {
  return request.get(rootUrl + 'id/' + id)
    .then(res => {
      // console.log(res.body)
      return res.body
    })
}
