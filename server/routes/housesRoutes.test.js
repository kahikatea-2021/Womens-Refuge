const request = require('supertest')
const server = require('../server')
const userDb = require('../db/users')
const houseDb = require('../db/houses')
const mockUsers = require('./testUsers')

// require auth0 mocktoken

let mockHouses = [
]

jest.mock('../db/houses')
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

beforeAll(() => {
  userDb.getUser.mockImplementation((sub, db = 'whatever') => {
    return Promise.resolve(mockUsers.generalUser)
  })
})

beforeEach(() => {
  mockHouses = [
    { id: 1, region_id: 1, name: 'test hosue 1', phone_1: '1234', phone_2: '3456', notes: '' },
    { id: 2, region_id: 1, name: 'test hosue 2', phone_1: '1234', phone_2: '3456', notes: '' },
    { id: 3, region_id: 1, name: 'test hosue 3', phone_1: '1234', phone_2: '3456', notes: '' },
    { id: 4, region_id: 1, name: 'test hosue 4', phone_1: '1234', phone_2: '3456', notes: '' },
    { id: 5, region_id: 1, name: 'test hosue 5', phone_1: '1234', phone_2: '3456', notes: '' }
  ]
})

test('GET /api/v1/houses should return all houses by default', () => {
  houseDb.genearlQuery.mockImplementation(() => {
    return Promise.resolve(mockHouses)
  })
  return request(server)
    .get('/api/v1/houses')
    .set({ authorization: mockUsers.admin })
    .expect(200)
    .then(results => {
      expect(results.body).toHaveLength(5)
      return null
    })
})

test('POST /api/v1/houses should only be accessable to admins', () => {
  return request(server)
    .post('/api/v1/houses')
    .set({ authorization: mockUsers.generalUser })
    .expect(403)
    .then((res) => {
      expect(res.text).toBe('')
      return null
    })
})

test('POST /api/v1/houses should add a house for an admin', () => {
  const mockHouse = { id: 6, region_id: 1, name: 'test hosue 7', phone_1: '1234', phone_2: '3456', notes: '' }
  houseDb.addHouse.mockImplementation((house, db) => {
    return Promise.resolve(mockHouses.push(mockHouse))
  })
  return request(server)
    .post('/api/v1/houses')
    .set({ authorization: mockUsers.admin })
    .expect(200)
    .then(() => {
      expect(mockHouses).toHaveLength(6)
      return null
    })
})

test('/PATCH /api/v1/houses/:id updates a house for an admin', () => {
  const mockHouse = { id: 1, region_id: 1, name: 'updated name', phone_1: '1234', phone_2: '3456', notes: 'notes added' }
  houseDb.updateHouseById.mockImplementation((houseId, houseDetails) => {
    return Promise.resolve(mockHouses[0] = mockHouse)
  })
  houseDb.getHouseById.mockImplementation((houseId) => {
    return Promise.resolve(mockHouse)
  })
  return request(server)
    .patch('/api/v1/houses/1')
    .set({ authorization: mockUsers.admin })
    .expect(200)
    .then(() => {
      expect(mockHouses[0].name).toBe('updated name')
      return null
    })
})

test('/PATCH /api/v1/houses/:id updates a house for coordinator that owns the house', () => {
  const mockHouse = { id: 1, region_id: 1, name: 'coordinator house', phone_1: '1234', phone_2: '3456', notes: 'notes added' }
  houseDb.updateHouseById.mockImplementation((houseId, houseDetails) => {
    return Promise.resolve(mockHouses[0] = mockHouse)
  })
  houseDb.getHouseById.mockImplementation((houseId) => {
    return Promise.resolve(mockHouse)
  })
  return request(server)
    .patch('/api/v1/houses/1')
    .set({ authorization: mockUsers.coordinator })
    .expect(200)
    .then(() => {
      expect(mockHouses[0].name).toBe('coordinator house')
      return null
    })
})

test('DELETE /api/v1/houses/:id should delete a house for admin', () => {
  const houseId = 1
  houseDb.deleteHouseById.mockImplementation((id) => {
    return Promise.resolve(mockHouses.shift())
  })
  return request(server)
    .delete('/api/v1/houses/' + houseId)
    .set({ authorization: mockUsers.admin })
    .expect(200)
    .then(() => {
      expect(mockHouses).toHaveLength(4)
      return null
    })
})

test('DELETE /api/v1/houses/:id deny access to non-admin users', () => {
  const houseId = 1
  houseDb.deleteHouseById.mockImplementation((id) => {
    return Promise.resolve(mockHouses.shift())
  })
  return request(server)
    .delete('/api/v1/houses/' + houseId)
    .set({ authorization: mockUsers.coordinator })
    .expect(403)
    .then(() => {
      expect(mockHouses).toHaveLength(5)
      return null
    })
})
