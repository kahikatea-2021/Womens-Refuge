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
        return <div key={house.name}>
          <Link to={`/house/${house.name}`}>
            <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
              {house.name}
            </div>
          </Link>
        </div>
      })}
    </>
  )
}

export default AllSafehouses
