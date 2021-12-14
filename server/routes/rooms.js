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
  console.log('route: ', req.body)
  const room = req.body
  if (!req.user.isAdmin) {
    res.status(403).send()
    return
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
  roomDb.getRoomById(id)
    .then(rooms => {
      if (rooms[0].house_id !== Number(req.user.house_id) && !req.user.isAdmin) {
        res.status(403).send()
      } else {
        return roomDb.updateRoomDescription(id, req.body.description)
      }
      return null
    })
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})

router.patch('/:id/availability', (req, res) => {
  const id = req.params.id || -1
  roomDb.getRoomById(id)
    .then(rooms => {
      if (Number(rooms[0].house_id) !== Number(req.user.house_id) && !req.user.isAdmin) {
        res.status(403).send()
        return null
      } else {
        return roomDb.updateRoomAvailability(id, req.body.available)
      }
    })
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => console.log(err))
})
