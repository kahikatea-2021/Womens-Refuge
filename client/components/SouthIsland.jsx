import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'


function SouthIsland () {
  const [regions, setRegions] = useState([])
  useEffect(() => {
    getAllIslandRegions('south')
      .then(results => {
        setRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>South Island Regions:</h1>
      {regions.map(region => {
        return <p key={region.region}>
          <Link to={`/region/${region.region}`}>{region.region}</Link>
        </p>
      })}

    </>
  )
}

export default SouthIsland
