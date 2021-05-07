import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'

function House () {
const [house, setHouse] = useState([])
const houseName = useParams().name
useEffect(() => {
  return getHouse(houseName)
  .then(results => {
    setHouse(results)
    return null
  })
  .catch(err => console.log(err))
}, [])

  return (
    <>
      <h1>House:</h1>
      <p key={house.name}>{houseName}</p>
    </>
  )
}

export default House
