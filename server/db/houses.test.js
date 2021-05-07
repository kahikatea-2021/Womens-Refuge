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
  return houseDb.genearlQuery('all', [], [], testDb)
    .then(houses => {
      expect(houses).toHaveLength(50)
      return null
    })
})

test('addHouse should add a house', () => {
  const house = { name: 'test house', notes: 'test notes', phone_1: 12345, phone_2: 45678, region_id: 1 }
  return houseDb.addHouse(house, testDb)
    .then(ids => {
      expect(ids).toHaveLength(1)
      expect(typeof ids[0]).toBe('number')
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
