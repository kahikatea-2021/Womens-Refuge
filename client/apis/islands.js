import request from 'superagent'
import { getState } from '../store'
const rootUrl = '/api/v1/regions'

function getAccessToken () {
  return 'Bearer ' + getState().user?.token
}

export function getAllIslandRegions (island) {
  console.log('region', getState().user)
  const token = 'Bearer ' + getState().user?.token
  // const token = getAccessToken()
  return request.get(rootUrl)
    .query({ island: island })
    .set({ authorization: token })
    .then(res => {
      return res.body
    })
}
