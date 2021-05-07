import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'

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
          {region.region}
        </p>
      })}

    </>
  )
}

export default NorthIsland
