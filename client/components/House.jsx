import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'

function House () {
  const [house, setHouse] = useState([])
  const houseName = useParams().name

  useEffect(() => {
    getHouse(houseName)
      .then(results => {
        console.log('house', house)
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <p key={house.name}>You are viewing: <b>{house.name}</b> house, in <b>{house.region}</b></p>
      {house.available === 1 && <p>This house currently has availablity</p>}
      {house.available === 0 && <p>This house currently has no availablity</p>}
      <p>Rooms available: <b>{house.rooms_available}</b></p>
      <p>Sleeping arrangements: <b>{house.description}</b></p>
      <p>Contact Number 1: <b>{house.phone_1}</b></p>
      <p>Contact Number 2: <b>{house.phone_2}</b></p>
      {house.notes && <p>Additional Information: <b>{house.notes}</b></p>}
    </>
  )
}

export default House
