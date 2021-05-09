const express = require('express')
const jwtCheck = require('./checkJwtMiddleware')
const path = require('path')
const userDb = require('./db/users')

// const fruitRoutes = require('./routes/fruits')
const houseRoutes = require('./routes/houses')
const regionRoutes = require('./routes/regions')
const roomRoutes = require('./routes/rooms')
const userRoutes = require('./routes/users')
const testRoutes = require('./routes/test')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', jwtCheck, (req, res, next) => {
  userDb.getUser(req.user.sub)
    .then(results => {
      if (results.length > 0) {
        next()
      } else {
        res.status(401).send()
      }
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Unauthorised')
    })
})

server.use('/api/v1/houses', houseRoutes)
server.use('/api/v1/regions', regionRoutes)
server.use('/api/v1/rooms', roomRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/test', testRoutes)

// server.use('api/v1/fruits', fruitRoutes)

module.exports = server
