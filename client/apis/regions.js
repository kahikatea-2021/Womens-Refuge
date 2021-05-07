import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1/houses/'

// Get all the houses
export function getAllHouses () {
  return request.get(rootUrl + 'all')
    .accept(acceptJsonHeader)
    .then(res => {
      return res.body.houses
    })
}

// Get all the houses in a particular region
export function getHousesInRegion (region) {
  return request.get(rootUrl + 'region/' + region)
    .accept(acceptJsonHeader)
    .then(res => {
      return res.body.region
    })
}
