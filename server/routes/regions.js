const express = require('express')

const router = express.Router()

module.exports = router

const exampleData = [
  { id: 1, name: 'TestHouse 1', rooms: 3, region: 'Auckland', island: 'North' },
  { id: 2, name: 'TestHouse 2', rooms: 1, region: 'Hamilton', island: 'North' },
  { id: 3, name: 'TestHouse 3', rooms: 2, region: 'Dunedin', island: 'South' },
  { id: 4, name: 'TestHouse 4', rooms: 4, region: 'Wellington', island: 'North' },
  { id: 5, name: 'TestHouse 5', rooms: 5, region: 'Chrischurch', island: 'South' },
  { id: 6, name: 'TestHouse 6', rooms: 7, region: 'Invercargill', island: 'South' },
  { id: 7, name: 'TestHouse 7', rooms: 7, region: 'Auckland', island: 'North' }
]

router.get('/', (req, res) => {
  console.log(req.query.region)
  const result = exampleData.filter((house, i, ar) => {
    console.log(ar.indexOf(req.query.region.toLocaleLowerCase()))
    return ar.indexOf(req.query.region.toLocaleLowerCase()) === i
  })
  console.log(result)
  res.status(200).json(result.map(({ region }) => region))
})
