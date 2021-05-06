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
  const island = req.query.island ? req.query.island : 'all'
  const regions = req.query.region ? [].concat(req.query.region) : ['all']
  const excludedRegions = req.query.exclude ? [].concat(req.query.exclude) : []

  let data = []
  data = island === 'all' ? exampleData : exampleData.filter(house => house.island.toLocaleLowerCase() === island.toLocaleLowerCase())

  data = regions[0] === 'all' ? data : data.filter(house => {
    const result = regions.find(region => region.toLocaleLowerCase() === house.region.toLocaleLowerCase())
    return !!result
  })

  data = excludedRegions.length > 0 ? data.filter(house => {
    const result = excludedRegions.find(region => house.region.toLocaleLowerCase() === region.toLocaleLowerCase())
    return !result
  }) : data

  // TODO hook up to database

  res.status(200).json(data)
})

router.get('/region/:region', (req, res) => {
  console.log(req.params.region)
  const data = exampleData.filter(house => house.region.toLowerCase() === req.params.region?.toLowerCase())
  res.json(data)
})

router.get('/house/:name', (req, res) => {
  console.log('house', req.params)
  const data = exampleData.find(({ name }) => name.toLowerCase() === req.params.name)
  res.status(200).json(data)
})

router.get('/house/:name/:room', (req, res) => {
  res.status(200).json({ room: 'no rooms right now' })
})
