const express = require('express')

const router = express.Router()

module.exports = router

const exampleData = [
  { id: 1, name: 'TestHouse 1', rooms: 3 },
  { id: 2, name: 'TestHouse 2', rooms: 1 }
]

router.get('/all', (req, res) => {
  const island = req.query.island ? req.query.island : 'all'
  const regions = req.query.region ? [].concat(req.query.region) : 'all'
  console.log('island:', island)
  res.status(200).json(exampleData)
})

router.get('/region/:region', (req, res) => {
  res.json(exampleData)
})
