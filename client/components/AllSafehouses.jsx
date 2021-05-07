import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHouses } from '../apis/regions'

function AllSafehouses () {
  const [houses, setHouses] = useState([])
  useEffect(() => {
    getAllHouses()
      .then(results => {
        setHouses(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>All Safehouses</h1>
      {houses.map(house => {
        return <p key={house.name}>
          <Link to={`/houses/${house.name}`}>  {house.name}</Link>
        </p>
      })}
    </>
  )
}

export default AllSafehouses
