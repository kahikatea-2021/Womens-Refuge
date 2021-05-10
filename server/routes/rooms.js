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

router.post('/', (req, res) => {
  const room = req.body
  if (!req.user.isMasterAdmin) {
    res.status(403).send()
  }
  roomDb.addRooms(room)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id/description', (req, res) => {
  const id = req.params.id || -1
  console.log(id, req.body.description)
  roomDb.getRoomById(id)
    .then(rooms => {
      if (rooms[0].house_id !== Number(req.user.house_id)) {
        res.status(403).send()
      } else {
        return roomDb.updateRoomDescription(id, req.body.description)
      }
      return null
    })
    .then(() => {
      console.log('updated')
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id/availability', (req, res) => {
  const id = req.params.id || -1
  console.log('route', id, 'avai:', req.body.available)
  roomDb.getRoomById(id)
    .then(rooms => {
      if (rooms[0].house_id !== Number(req.user.house_id)) {
        res.status(403).send()
      } else {
        return roomDb.updateRoomAvailability(id, req.body.available)
      }
      return null
    })
    .then(() => {
      console.log('updated')
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})
