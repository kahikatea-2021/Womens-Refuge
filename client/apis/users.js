import request from 'superagent'

const baseURL = 'api/v1/users/'

export function getUser (id) {
  return request.post(baseURL)
    .send({ id: id })
    .then(res => {
      return res.body
    })
}
