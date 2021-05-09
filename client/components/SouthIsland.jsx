import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function SouthIsland () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated, user } = useAuth0()

  useEffect(() => {
    getAllIslandRegions('south')
      .then(results => {
        setRegions(results)
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
        <h1>South Island Regions:</h1>
        {regions.map(region => {
          return <div key={region.region}>
            <Link to={`/region/${region.region}`}>
              <div className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                {region.region}
              </div>
            </Link>
          </div>
        })}

      </>
    )
  }
}

export default SouthIsland
