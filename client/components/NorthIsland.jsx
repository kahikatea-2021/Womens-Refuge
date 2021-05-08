import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function NorthIsland () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      getAllIslandRegions('north')
        .then(results => {
          setRegions(results)
          return null
        })
        .catch(err => console.log(err))
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>North Island Regions:</h1>
      {regions.map(region => {
        return <p key={region.region}>
          <Link to={`/region/${region.region}`}>{region.region}</Link>
        </p>
      })}
    </>
  )
}

export default NorthIsland
