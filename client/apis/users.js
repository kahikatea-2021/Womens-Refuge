import request from 'superagent'
import { accessHeader } from './tokenHelper'

const baseURL = 'api/v1/users/'

export function getUser (id, token) {
  console.log('access header', accessHeader)
  return request.post(baseURL)
    .set(accessHeader)
    .send({ id: id })
    .then(res => {
      return res.body
    })
}
