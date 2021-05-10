import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getHousesInRegion } from '../apis/regions'
import { useAuth0 } from '@auth0/auth0-react'

function Region () {
  const [houses, setHouses] = useState([])
  const regionName = useParams().name
  const { isLoading, isAuthenticated, user } = useAuth0()

  useEffect(() => {
    return getHousesInRegion(regionName)
      .then(houses => {
        console.log('houses', houses)
        setHouses(houses)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  if (isLoading) {
    return <img src="../../images/loading.gif"></img>
  }

  console.log(houses)

  if (isAuthenticated && user) {
    return (
      <>
        <div className='mt-36'>
          {houses.length > 0 && houses.map(house => {
            return <div key={house.name}><Link className=' flex justify-center ' to={`/house/${house.name}`} >
              <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                {house.name}
              </div>
            </Link>
            </div>
          })}
        </div>
      </>
    )
  }
}

export default Region
