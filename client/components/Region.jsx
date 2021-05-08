import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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
        return <div key={house.house_id}><Link to={`/house/${house.name}`} >
          <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
            {house.name}
          </div>
        </Link>
        </div>
      })}
    </>
  )
}

export default Region
