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

// router.update('/:id', (req, res) => {
//   const id = req.params.id || -1

//   roomDb.updateRoomById (id)
//   .then(room => {
//     res
//   }))
