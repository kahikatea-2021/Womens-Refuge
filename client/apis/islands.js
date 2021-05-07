import request from 'superagent'
const rootUrl = '/api/v1/regions'

export function getAllIslandRegions (island) {
  return request.get(rootUrl)
    .query({ island: island })
    .then(res => {
      return res.body
    })
}
