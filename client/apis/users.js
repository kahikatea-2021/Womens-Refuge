import request from 'superagent'

const baseURL = 'api/v1/users/'

export function getUser (id, token) {
  console.log(token)
  return request.post(baseURL)
    .set({ authorization: 'Bearer ' + token })
    .send({ id: id })
    .then(res => {
      return res.body
    })
}
