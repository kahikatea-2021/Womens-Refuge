const roomDb = require('../db/rooms')

const express = require('express')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  const id = req.params.id || -1

  roomDb.getRoomById(id)
    .then(room => {
      res.status(200).json(room)
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id/description', (req, res) => {
  const id = req.params.id || -1
  console.log(id, req.body.description)
  roomDb.updateRoomDescription(id, req.body.description)
    .then(() => {
      console.log('updated')
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id/availability', (req, res) => {
  const id = req.params.id || -1
  console.log(id, req.body.available)
  roomDb.updateRoomAvailability(id, req.body.available)
    .then(() => {
      console.log('updated')
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})
