import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHousesInRegion } from '../apis/regions'
import { Link } from 'react-router-dom'


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
        return <p key={house.id}><Link to={`/house/${house.name}`}>  {house.name}</Link></p>
      })}
    </>
  )
}

export default Region
