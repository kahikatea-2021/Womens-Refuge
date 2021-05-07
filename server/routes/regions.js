const express = require('express')

const router = express.Router()
const regionDb = require('../db/regions')

module.exports = router

router.get('/', (req, res) => {
  const island = req.query.island || 'all'
  regionDb.getIslandRegions(island)
    .then(regions => {
      res.status(200).json(regions)
      return null
    })
    .catch(err => console.log(err))
})
