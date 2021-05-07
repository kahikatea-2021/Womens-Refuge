import React, { useEffect, useState } from 'react'
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
        console.log('this is it!! ', house)
        return <p key={house.name}>
          {house.name}
        </p>
      })}
    </>
  )
}

export default AllSafehouses
