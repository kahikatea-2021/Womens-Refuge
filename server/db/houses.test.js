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
      expect(houses).toHaveLength(51)
      return null
    })
})
