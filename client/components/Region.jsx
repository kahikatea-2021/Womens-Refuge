import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getHousesInRegion } from '../apis/regions'
import { useAuth0 } from '@auth0/auth0-react'

function Region () {
  const [houses, setHouses] = useState([])
  const regionName = useParams().name
  const { isLoading, isAuthenticated, user } = useAuth0()
  const history = useHistory()

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
        <div className=''>
          <div className='flex flex-col ml-10 md:flex-row md:justify-center md:ml-1'>
            <div className='flex items-center mx-5 mb-1'>
              <img src="/images/tickGreen.png" className="h-8 w-8 mr-2" alt="" /><p>Room available</p>
            </div>
            <div className='flex items-center mx-5 mb-1'>
              <img src="/images/crossRed.png" className="h-8 w-8 mr-2" alt="" /><p>No room available</p>
            </div>
          </div>
          <h1 className=' flex justify-center font-extrabold text-2xl my-8 mt-20'>{regionName + ' Houses'}</h1>
          {houses.length > 0 && houses.map(house => {
            return <div key={house.name}><Link className=' flex justify-center ' to={`/house/${house.name}`} >
              <button className="px-5 flex justify-between items-center text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                <p className="w-8"></p>{house.name} <img src={house.rooms_available > 0 ? '/images/tickWhite.png' : '/images/crossWhite.png'} className="h-8 w-8" alt="" />
              </button>
            </Link>
            </div>
          })}
        </div>
      </>
    )
  }
}

export default Region
