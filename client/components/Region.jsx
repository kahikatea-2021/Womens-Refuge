import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getHousesInRegion } from '../apis/regions'
import { useAuth0 } from '@auth0/auth0-react'

function Region () {
  const [houses, setHouses] = useState(null)
  const regionName = useParams().name
  const { isLoading, isAuthenticated, user } = useAuth0()
  const history = useHistory()

  useEffect(() => {
    return getHousesInRegion(regionName)
      .then(houses => {
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

  if (houses) {
    console.log(houses)
  } else {
    console.log('not houses')
  }

  if (isAuthenticated && user) {
    return (
      <>
        <div className='flex md:flex-row justify-center text-sm md:text-base mt-2 space-x-3'>
          <div className='flex items-center md:mx-5 mb-1'>
            <img src="/images/tickGreen.png" className="w-4 md:w-8 mr-1 md:mr-2" alt="" /><p>Available</p>
          </div>
          <div className='flex items-center md:mx-5 mb-1'>
            <img src="/images/crossRed.png" className="w-4 md:w-8 mr-1 md:mr-2" alt="" /><p>Unavailable</p>
          </div>
        </div>
        <h1 className=' flex justify-center font-extrabold text-2xl mb-8 mt-6'>{regionName + ' Houses'}</h1>
        {}
        {houses && houses.map(house => {
          return <div key={house.name} className=' flex justify-center '>
            <button onClick={() => { history.push(`/house/${house.name}`) }} className="px-5 flex justify-between items-center text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
              <p className="w-8"></p>{house.name} <img src={house.available_rooms > 0 ? '/images/tickWhite.png' : '/images/crossWhite.png'} className="w-6 md:w-8" alt="" />
            </button>
          </div>
        })}
      </>
    )
  }
}

export default Region
