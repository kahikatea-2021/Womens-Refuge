import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function NorthIsland () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated } = useAuth0()

  const user = useSelector(state => state.user)

  useEffect(() => {
    if (isAuthenticated && regions.length <= 0) {
      getAllIslandRegions('north')
        .then(results => {
          setRegions(results)
          return null
        })
        .catch(err => console.log(err))
    }
  })

  if (isLoading) {
    return <img src="../../images/loading.gif"></img>
  }

  if (!isAuthenticated || !user) {
    return <p>Unauthorised access</p>
  }

  return (
    <>
      <h1 className=' flex justify-center font-extrabold text-2xl my-8 mt-20'>North Island Regions:</h1>
      {regions.map(region => {
        return <div  key={region.region}>
          <Link className=' flex justify-center ' to={`/region/${region.region}`}>
            <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
              {region.region}
            </div>
          </Link>
        </div>
      })}
    </>
  )
  // }
}

export default NorthIsland
