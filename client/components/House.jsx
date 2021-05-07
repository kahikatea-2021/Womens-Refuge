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
      <p key={house.name}>You are viewing: {houseName} house</p>
    </>
  )
}

export default House
