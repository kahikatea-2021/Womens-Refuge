const request = require('supertest')
const server = require('../server')
const userDb = require('../db/users')
const mockUsers = require('./testUsers')

jest.mock('../checkJwtMiddleware', () => (req, res, next) => {
  // console.log('header', req.headers)
  req.user = req.headers.authorization
  if (req.user !== mockUsers.generalUser) {
    res.status(401).send()
    return
  }
  next()
})

jest.mock('../db/users')

test('should pass with authorisations', () => {
  userDb.getUser.mockImplementation((sub, db = 'whatever') => {
    return Promise.resolve(mockUsers.generalUser)
  })
  return request(server)
    .get('/api/v1/test')
    .set({ authorization: 'generalUser' })
    .expect(200)
    .then(res => {
      expect(res.text).toMatch('hello from a protected place')
      return null
    })
})

test('GET /api/v1/test should reject access without authorization', () => {
  return request(server)
    .get('/api/v1/test')
    .set({ authorization: 'otherUser' })
    .expect(401)
    .then(res => {
      expect(res.text).toBe('')
      return null
    })
})
