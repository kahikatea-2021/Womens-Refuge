const express = require('express')
const houseDb = require('../db/houses')
const roomDb = require('../db/rooms')
const router = express.Router()
const userDb = require('../db/users')
const checkJwt = require('./jwtMiddleware')

module.exports = router

router.get('/', (req, res) => {
  const island = req.query.island ? req.query.island : 'all'
  const regions = req.query.region ? [].concat(req.query.region) : []
  const excludedRegions = req.query.exclude ? [].concat(req.query.exclude) : []

  console.log('regions: ', regions)
  houseDb.genearlQuery(island, regions, excludedRegions)
    .then(result => {
      res.status(200).json(result)
      return null
    })
    .catch(err => console.log(err))
})

router.post('/', checkJwt, (req, res) => {
  const house = req.body

  houseDb.addHouse(house)
    .then((house) => {
      res.status(200).json(house)
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id', checkJwt, (req, res) => {
  console.log('in house patch')
  const houseDetails = req.body
  const houseId = req.params.id
  const userId = req.user.sub
  userDb.getUser(userId)
    .then(user => {
      console.log(user)
      if (Number(user[0]?.house_id) === Number(houseId)) {
        return houseDb.updateHouseById(houseId, houseDetails)
      } else {
        res.status(401).send('You do not have access to this resource.')
      }
      return null
    })
    .then(() => {
      return houseDb.getHouseById(houseId)
    })
    .then(house => {
      res.status(200).json(house[0])
      return null
    })
    .catch(err => console.log(err))
})

router.put('/', checkJwt, (req, res) => {
  const house = {}
  house.id = req.body.id
  house.name = req.body.name
  house.region_id = req.body.region
  house.phone_1 = req.body.phone_1
  house.phone_2 = req.body.phone_2
  house.notes = req.body.note
  houseDb.updateHouseById(house.id)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

router.delete('/:id', checkJwt, (req, res) => {
  houseDb.deleteHouseById(req.params.id)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

// get houses by region
router.get('/region/:region', (req, res) => {
  const region = req.params.region
  houseDb.getAllRegionalHouses(region)
    .then(data => {
      res.json(data)
      return null
    })
    .catch(err => console.log(err))
})

router.get('/name/:name', (req, res) => {
  const name = req.params.name
  houseDb.getHouseByName(name)
    .then(house => {
      console.log('db', house)
      res.status(200).json(house)
      return null
    })
    .catch(err => console.log(err))
})

router.get('/id/:id', (req, res) => {
  const id = req.params.id
  houseDb.getHouseById(id)
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
