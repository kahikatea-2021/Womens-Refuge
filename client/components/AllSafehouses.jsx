import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHouses } from '../apis/regions'
import { useAuth0 } from '@auth0/auth0-react'
import houseFormatter from './formatter'

function AllSafehouses () {
  const [houses, setHouses] = useState([])
  const { isLoading, isAuthenticated, user } = useAuth0()

  useEffect(() => {
    getAllHouses()
      .then(results => {
        setHouses(houseFormatter(results))
        console.log(houseFormatter(results))
        return null
      })
      .catch(err => console.log(err))
  }, [])

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  if (isAuthenticated && user) {
    return (
      <>
        <h1 className=' text-center my-8 mt-20 '>All Safehouses</h1>
        {/* {houses.map(house => {
          return <div key={house.name}>
            <Link className='flex justify-center' to={`/house/${house.name}`}>
              <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                {house.name}
              </div>
            </Link>
          </div>
        })} */}

        {houses.map(island => {
          return (
            <div key={island.island}>
              <p className="my-1 text-center">{island.island} Island</p>
              {island.regions.map(region => {
                return (
                  <div key={region.name}>
                    <p className="my-1 mt-2 text-center">{region.name}</p>
                    {region.houses.map(house => {
                      return (
                        <div key={house.name}>
                          <Link className='flex justify-center' to={`/house/${house.name}`}>
                            <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                              {house.name}
                            </div>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>)
        })}
      </>
    )
  }
}

export default AllSafehouses
