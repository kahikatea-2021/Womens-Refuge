import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHousesInRegion } from '../apis/regions'

function Region () {
  const [houses, setHouses] = useState(null)
  const regionName = useParams().name
  useEffect(() => {
    return getHousesInRegion(regionName)
      .then(houses => {
        setHouses(houses)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {houses && houses.map(house => {
        return <p key={house.id}>{house.name}</p>
      })}
    </>
  )
}

export default Region
