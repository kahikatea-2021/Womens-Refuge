const config = require('./knexfile').test
const knex = require('knex')
const testDb = knex(config)

const houseDb = require('./houses')

beforeAll(() => {
  return testDb.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(() => {
  return testDb.seed.run({ directory: './server/db/testseeds' })
})

test('generalQuery should return all the houses by default', () => {
  return houseDb.genearlQuery('all', [], [], 1, testDb)
    .then(houses => {
      expect(houses).toHaveLength(50)
      return null
    })
})

test('addHouse should add a house', () => {
  const house = { name: 'test house', notes: 'test notes', phone_1: 12345, phone_2: 45678, region_id: 1 }
  return houseDb.addHouse(house, testDb)
    .then(house => {
      expect(typeof house.id).toBe('number')
      expect(house.notes).toBe('test notes')
      expect(house.name).toBe('test house')
      expect(house.phone_1).toBe(12345)
      expect(house.phone_2).toBe(45678)
      expect(house.region_id).toBe(1)
      return null
    })
})

test('getHouseById should return house with that id', () => {
  const id = 4
  return houseDb.getHouseById(id, testDb)
    .then(house => {
      expect(house[0].name).toBe('Keke')
      expect(house).toHaveLength(1)
      return null
    })
})
// test fails for now
test('updateHouseById should return updated house with this id', () => {
  const updateHouse = {
    id: 6,
    region_id: 2,
    name: 'test update house',
    phone_1: '1234567890',
    phone_2: '12345678901'
  }
  return houseDb.updateHouseById(updateHouse.id, updateHouse, testDb)
    .then(house => {
      return houseDb.getHouseById(6, testDb)
    })
    .then(houses => {
      const house = houses[0]
      expect(house.house_id).toBe(6)
      expect(Number(house.region_id)).toBe(2)
      expect(house.name).toBe('test update house')
      expect(house.phone_1).toBe('1234567890')
      expect(house.phone_2).toBe('12345678901')
      return null
    })
})

test('deleteHouseById should delete house with that id', () => {
  const id = 4
  return houseDb.deleteHouseById(id, testDb)
    .then(house => {
      expect(house).toBe(1)
      return null
    })
})
