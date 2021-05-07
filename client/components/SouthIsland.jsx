import React, { useEffect, useState } from 'react'
import HouseList from './HouseList'
import { getAllIslandRegions } from '../apis/islands'

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
          {region.region}
        </p>
      })}
      <HouseList/>

    </>
  )
}

// We will use .map() method to map over the regions once database has been established

export default SouthIsland
