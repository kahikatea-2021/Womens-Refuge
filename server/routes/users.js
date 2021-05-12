const express = require('express')

const router = express.Router()

const userDb = require('../db/users')

module.exports = router

router.post('/', (req, res) => {
  const userId = req.body.id
  userDb.getUser(userId)
    .then(results => {
      res.status(200).json(results[0])
      return null
    })
    .catch(err => console.log(err))
})
