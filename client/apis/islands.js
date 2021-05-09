import request from 'superagent'
import { getState } from '../store'
import { accessHeader } from './tokenHelper'
const rootUrl = '/api/v1/regions'

export function getAllIslandRegions (island) {
  console.log('region', getState().user)
  return request
    .get(rootUrl)
    .query({ island: island })
    .set(accessHeader)
    .then(res => {
      return res.body
    })
}
