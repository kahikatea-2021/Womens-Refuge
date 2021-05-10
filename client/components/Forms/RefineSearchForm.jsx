import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllIslandRegions } from '../../apis/islands'
import { useAuth0 } from '@auth0/auth0-react'

export default function RefineSearchForm () {
  const ourUser = useSelector(state => state.user)
  const { isLoading, isAuthenticated } = useAuth0()
  const [northRegions, setNorthRegions] = useState([])
  const [southRegions, setSouthRegions] = useState([])

  // useEffect(() => {
  //   if (isAuthenticated && northRegions.length <= 0) {
  //     getAllIslandRegions('north')
  //       .then(results => {
  //         setNorthRegions(results)
  //         return null
  //       })
  //       .catch(err => console.log(err))
  //     getAllIslandRegions('south')
  //       .then(results => {
  //         setSouthRegions(results)
  //         return null
  //       })
  //       .catch(err => console.log(err))
  //   }
  // })

  function getNorth () {
    getAllIslandRegions('north')
      .then(results => {
        setNorthRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }

  function handleClickNorth (e) {
    (isAuthenticated && northRegions.length <= 0)
      ? getNorth()
      : setNorthRegions([])
  }

  function getSouth () {
    getAllIslandRegions('south')
      .then(results => {
        setSouthRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }

  function handleClickSouth (e) {
    (isAuthenticated && southRegions.length <= 0)
      ? getSouth()
      : setSouthRegions([])
  }
  console.log('handleclick north', northRegions)
  console.log('handleclick south', southRegions)

  return (
    <>
      <h2>Select an Island: </h2>
      <form action="/action_page.php">
        <input onClick={handleClickNorth} type="checkbox" id="north" name="north" value="north"/>
        <label htmlFor="north"> North Island </label><br/>
        <input onClick={handleClickSouth} type="checkbox" id="south" name="south" value="south"/>
        <label htmlFor="south"> South Island </label><br/>
      </form>

      {/* <div>North Island</div>
      <div>South Island</div> */}

    </>
  )
}
