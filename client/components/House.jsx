import React, { useEffect, useState } from 'react'
import getHouseByName from '../apis/houses'
// import { useParams } from 'react-router-dom'

function House () {
const [house, setHouse] = useState([])
// const houseName = useParams().name
useEffect(() => {
  getHouseByName()
  .then(results => {
    setHouse(results)
    return null
  })
  .catch(err => console.log(err))
}, [])

  return (
    <>
      <h1>House:</h1>
      <p key={house.name}>{house.name}</p>
    </>
  )
}

export default House
