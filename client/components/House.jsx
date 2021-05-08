import React, { useEffect, useState } from 'react'
import { getHouse } from '../apis/regions'
import { useParams } from 'react-router-dom'

function House () {
  const [house, setHouse] = useState(null)
  const houseName = useParams().name

  function countAvailability () {
    return house.filter(house => house.available).length
  }

  useEffect(() => {
    getHouse(houseName)
      .then(results => {
        console.log('house', results)
        setHouse(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {house && <p>
        <p>You are viewing: <b>{house[0].name}</b> house, in <b>{house[0].region}</b></p>
        {house[0].available === 1 && <p>This house currently has availablity</p>}
        {house[0].available === 0 && <p>This house currently has no availablity</p>}
        <p>Room available: {countAvailability() > 0 ? 'Yes' : 'No'}</p>
        <ul>
          {house[0] && house.map((h, i) => {
            return <li key={i}><span>Room {i + 1} beds: </span>{h.description} <span>- Available: {h.available ? 'yes' : 'no'}</span></li>
          })}
          <p>Primary Contact Number: <b>{house[0].phone_1}</b></p>
          <p>Secondary Contact Number: <b>{house[0].phone_2}</b></p>
          {house[0]?.notes && <p>Additional Information: <b>{house[0].notes}</b></p>}

        </ul>
      </p>}
    </>
  )
}

export default House
