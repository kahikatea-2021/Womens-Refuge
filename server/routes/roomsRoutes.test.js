const request = require('supertest')
const server = require('../server')
const userDb = require('../db/users')
const mockUsers = require('./testUsers')
const roomDb = require('../db/rooms')

jest.mock('../db/rooms')
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

let mockRooms = []

beforeAll(() => {
  userDb.getUser.mockImplementation((sub, db = 'whatever') => {
    return Promise.resolve(mockUsers.generalUser)
  })
})

beforeEach(() => {
  mockRooms = [
    { id: 1, house_id: 1, description: 'Test room 1', availaility: 0 },
    { id: 2, house_id: 3, description: 'Test room 2', availaility: 0 },
    { id: 3, house_id: 1, description: 'Test room 3', availaility: 1 },
    { id: 4, house_id: 5, description: 'Test room 4', availaility: 1 },
    { id: 5, house_id: 8, description: 'Test room 5', availaility: 0 },
    { id: 6, house_id: 1, description: 'Test room 6', availaility: 1 }
  ]
})

test('GET /api/v1/rooms/:id should get a room by id', () => {
  const id = 2
  roomDb.getRoomById.mockImplementation(roomId => {
    return Promise.resolve(mockRooms[id])
  })
  return request(server)
    .get('/api/v1/rooms/' + id)
    .set({ authorization: mockUsers.generalUser })
    .expect(200)
    .then(res => {
      const room = res.body
      expect(typeof room).toBe('object')
      expect(room.description).toBe(mockRooms[id].description)
      return null
    })
})

test('POST /api/v1/rooms should add a room for admin user', () => {
  const mockRoom = { id: 7, house_id: 10, description: 'Test add room' }
  roomDb.addRooms.mockImplementation(room => {
    return Promise.resolve(mockRooms.push(mockRoom))
  })
  return request(server)
    .post('/api/v1/rooms')
    .set({ authorization: mockUsers.admin })
    .send(mockRoom)
    .expect(200)
    .then(() => {
      expect(mockRooms).toHaveLength(7)
      return null
    })
})

test('POST /api/v1/rooms should deny non-admin users', () => {
  const mockRoom = { id: 7, house_id: 10, description: 'Test add room' }
  roomDb.addRooms.mockImplementation(room => {
    return Promise.resolve(mockRooms.push(mockRoom))
  })
  return request(server)
    .post('/api/v1/rooms')
    .set({ authorization: mockUsers.generalUser })
    .send(mockRoom)
    .expect(403)
    .then(() => {
      expect(mockRooms).not.toHaveLength(7)
      return null
    })
})

test('PATCH /:id/availability should update the rooms availability for house owner or admin', () => {
  const roomId = 2
  const roomAvailablility = '1'
  roomDb.getRoomById.mockImplementation(id => {
    return Promise.resolve([mockRooms[roomId]])
  })
  roomDb.updateRoomAvailability.mockImplementation((id, availaility) => {
    return Promise.resolve(mockRooms[roomId].availaility = roomAvailablility)
  })
  return request(server)
    .patch('/api/v1/rooms/' + roomId + '/availability')
    .send(roomAvailablility)
    .set({ authorization: mockUsers.admin })
    .expect(200)
    .then(() => {
      expect(mockRooms[roomId].availaility).toBe(roomAvailablility)
      return null
    })
})

test('PATCH /:id/availability should deny non admin or house owner', () => {
  const roomId = 1
  const roomAvailablility = '1'
  roomDb.getRoomById.mockImplementation(id => {
    return Promise.resolve([mockRooms[roomId]])
  })
  roomDb.updateRoomAvailability.mockImplementation((id, availaility) => {
    return Promise.resolve(mockRooms[roomId].availaility = roomAvailablility)
  })
  return request(server)
    .patch('/api/v1/rooms/' + roomId + '/availability')
    .send(roomAvailablility)
    .set({ authorization: mockUsers.generalUser })
    .expect(403)
    .then(() => {
      expect(mockRooms[roomId].availaility).toBe(0)
      return null
    })
})
