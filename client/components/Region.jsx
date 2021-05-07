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
        console.log(houses)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  console.log(useParams().name)
  return (
    <>
      {houses && houses.map(house => {
        return <p key={house.id}>{house.name}</p>
      })}
    </>
  )
}

// We will use .map() method to map over the safehouses within the individual regions once database has been established

export default Region
