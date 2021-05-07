import request from 'superagent'
// const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1/regions'

// get all the houses in SI

// export function getAllSouthHouses () {
//   return request.get(rootUrl)
//     .accept(acceptJsonHeader)
//     .then(res => {
//       return res.send('yoohoo')
//     })
// }

export function getAllIslandRegions (island) {
  return request.get(rootUrl)
    .query({ island: island })
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
