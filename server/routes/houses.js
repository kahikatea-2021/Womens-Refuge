const express = require('express')
const houseDb = require('../db/houses')
const roomDb = require('../db/rooms')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  const island = req.query.island ? req.query.island : 'all'
  const regions = req.query.region ? [].concat(req.query.region) : []
  const excludedRegions = req.query.exclude ? [].concat(req.query.exclude) : []

  console.log('regions: ', regions)
  houseDb.genearlQuery(island, regions, excludedRegions)
    .then(result => {
      console.log('in general query', result)
      res.status(200).json(result)
      return null
    })
    .catch(err => console.log(err))
})

// get houses by region
router.get('/region/:region', (req, res) => {
  console.log(req.params.region)
  const region = req.params.region
  houseDb.getAllRegionalHouses(region)
    .then(data => {
      res.json(data)
      return null
    })
    .catch(err => console.log(err))
})

router.get('/house/:name', (req, res) => {
  const name = req.params.name
  houseDb.getHouseByName(name)
    .then(house => {
      res.status(200).json(house)
      return null
    })
    .catch(err => console.log(err))
})

router.get('/house/:id/rooms', (req, res) => {
  const id = req.params.id
  roomDb.getRoomsByHouseId(id)
    .then(rooms => {
      res.status(200).json(rooms)
      return null
    })
    .catch(err => console.log(err))
})
