import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1/southisland'

// get all the houses in SI

export function getAllSouthHouses () {
  return request.get(rootUrl)
    .accept(acceptJsonHeader)
    .then(res => {
      return res.send('yoohoo')
    })
}
