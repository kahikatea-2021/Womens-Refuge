const request = require('supertest')
const server = require('../server')
const userDb = require('../db/users')
const regionDb = require('../db/regions')
const mockUsers = require('./testUsers')

jest.mock('../db/regions')
jest.mock('../db/users')
jest.mock('../checkJwtMiddleware', () => (req, res, next) => {
  req.user = { name: req.headers.authorization }
  const userType = req.user.name
  if (userType !== mockUsers.generalUser && userType !== mockUsers.coordinator && userType !== mockUsers.admin) {
    res.status(401).send()
    return
  }
  if (userType === mockUsers.admin) {
    req.user.isAdmin = true
  }
  if (userType === mockUsers.coordinator) {
    req.user.house_id = 1
  }
  next()
})

let mockRegions = [
  { id: 1, region: 'Test region 1', island: 'north' },
  { id: 2, region: 'Test region 2', island: 'north' },
  { id: 3, region: 'Test region 3', island: 'north' },
  { id: 4, region: 'Test region 4', island: 'south' },
  { id: 5, region: 'Test region 5', island: 'south' },
  { id: 6, region: 'Test region 6', island: 'south' },
  { id: 7, region: 'Test region 7', island: 'south' }
]

beforeAll(() => {
  userDb.getUser.mockImplementation((sub, db = 'whatever') => {
    return Promise.resolve(mockUsers.generalUser)
  })
})

beforeEach(() => {
  mockRegions = [
    { id: 1, region: 'Test region 1', island: 'north' },
    { id: 2, region: 'Test region 2', island: 'north' },
    { id: 3, region: 'Test region 3', island: 'north' },
    { id: 4, region: 'Test region 4', island: 'south' },
    { id: 5, region: 'Test region 5', island: 'south' },
    { id: 6, region: 'Test region 6', island: 'south' },
    { id: 7, region: 'Test region 7', island: 'south' }
  ]
})

test('GET /api/v1/regions should return all regions', () => {
  regionDb.getIslandRegions.mockImplementation(island => {
    return Promise.resolve(mockRegions)
  })
  return request(server)
    .get('/api/v1/regions/')
    .set({ authorization: mockUsers.generalUser })
    .expect(200)
    .then((results) => {
      expect(results.body).toHaveLength(7)
      return null
    })
})
