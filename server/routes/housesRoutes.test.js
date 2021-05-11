const request = require('supertest')
const server = require('../server')
// require auth0 mocktoken

jest.mock('../db/houses')

const mockHouse = {
  name: 'Test',
  region_id: '1',
  phone_1: '1234',
  phone_2: '5678',
  notes: 'null'
}

test('POST / return unauthorised status when a nonadmin attempts to add whare', (done) => {
  request(server)
    .post('/api/v1/houses/')
    .send(mockHouse)
    .expect(401)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})
