import request from 'superagent'
import getAccessHeader from './tokenHelper'

const baseURL = 'api/v1/users/'

export function getUser (id, token) {
  return request.post(baseURL)
    .set(getAccessHeader())
    .send({ id: id })
    .then(res => {
      return res.body
    })
}
