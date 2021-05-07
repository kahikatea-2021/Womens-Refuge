import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'

function NorthIsland () {
  const [regions, setRegions] = useState([])
  useEffect(() => {
    getAllIslandRegions('north')
      .then(results => {
        setRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])

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
