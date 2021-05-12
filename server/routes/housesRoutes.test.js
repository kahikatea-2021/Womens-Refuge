const request = require('supertest')
const server = require('../server')
const userDb = require('../db/users')
const houseDb = require('../db/houses')
const mockUsers = require('./testUsers')

// require auth0 mocktoken

const mockHouses = [
  { id: 1, region_id: 1, name: 'test hosue 1', phone_1: '1234', phone_2: '3456', notes: '' },
  { id: 2, region_id: 1, name: 'test hosue 2', phone_1: '1234', phone_2: '3456', notes: '' },
  { id: 3, region_id: 1, name: 'test hosue 3', phone_1: '1234', phone_2: '3456', notes: '' },
  { id: 4, region_id: 1, name: 'test hosue 4', phone_1: '1234', phone_2: '3456', notes: '' },
  { id: 5, region_id: 1, name: 'test hosue 5', phone_1: '1234', phone_2: '3456', notes: '' }
]

jest.mock('../db/houses')
jest.mock('../db/user')
jest.mock('../checkJwtMiddleware', () => (req, res, next) => {
  // console.log('header', req.headers)
  req.user = req.headers.authorization
  next()
})

const mockHouse = {
  name: 'Test',
  region_id: '1',
  phone_1: '1234',
  phone_2: '5678',
  notes: 'null'
}

test('GET /api/v1/houses should return all houses by default', () => {
  request(server)
    .get('')
})
