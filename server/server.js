const express = require('express')
const path = require('path')

// const fruitRoutes = require('./routes/fruits')
const houseRoutes = require('./routes/houses')
const regionRoutes = require('./routes/regions')
const roomRoutes = require('./routes/rooms')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/houses', houseRoutes)
server.use('/api/v1/regions', regionRoutes)
server.use('/api/v1/rooms', roomRoutes)

// server.use('api/v1/fruits', fruitRoutes)

module.exports = server
