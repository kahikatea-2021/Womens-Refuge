const config = require('./knexfile').test
const knex = require('knex')
const testDb = knex(config)

const regionDb = require('./regions')

beforeAll(() => {
  return testDb.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(() => {
  return testDb.seed.run({ directory: './server/db/testseeds' })
})

test('getIslandRegions should return coresponding region', () => {
    const island = 'north'
    return regionDb.getIslandRegions(island, testDb)
      .then(region => {
        expect(region[0].island).toBe('north')
        expect(region).toHaveLength(9)
        return null
      })
  })