import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllIslandRegions } from '../../apis/islands'
import { useAuth0 } from '@auth0/auth0-react'
import stringMaker from './refineSearchFormHelper'
import getHousesFromSearch from '../../apis/houses'

export default function RefineSearchForm () {
  const { isAuthenticated } = useAuth0()
  const [northRegions, setNorthRegions] = useState([])
  const [southRegions, setSouthRegions] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [queryObject, setQueryObject] = useState({
    north: false,
    south: false,
    Northland: false,
    Auckland: false,
    'Bay of Plenty': false,
    Waikato: false,
    Gisborne: false,
    Taranaki: false,
    'Hawkes Bay': false,
    'Whanganui - Manawatu': false,
    Wellington: false,
    Nelson: false,
    Marlbrough: false,
    Canterbury: false,
    'West Coast': false,
    Otago: false,
    Southland: false,
    available: false
  })

  function getNorth () {
    getAllIslandRegions('north')
      .then(results => {
        setNorthRegions(results)
        return null
      })
      .catch(err => console.log(err))
  }

  function handleClickNorth (e) {
    clickHandler(e);
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
    clickHandler(e);
    (isAuthenticated && southRegions.length <= 0)
      ? getSouth()
      : setSouthRegions([])
  }

  function clickHandler (e) {
    const currentVal = queryObject[e.target.name]
    setQueryObject({ ...queryObject, [e.target.name]: !currentVal })
  }

  function submitHandler () {
    getHousesFromSearch(stringMaker(queryObject))
      .then(result => setSearchResults(result))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className='bg-purple-200 flex flex-row justify-center self-center shadow-lg rounded-xl w-4/5 space-x-4 relative'>
        <div className='m-6'>
          <h2 className='font-bold text-lg w-full mb-4'>Select at least one</h2>
          <form action="/action_page.php">
            <input onClick={handleClickNorth} type="checkbox" id="north" name="north" value="north"/>
            <label htmlFor="north"> North Island </label><br/>
            <input onClick={handleClickSouth} type="checkbox" id="south" name="south" value="south"/>
            <label htmlFor="south"> South Island </label>
          </form>
        </div>

        <div className='m-6'>
          <h3 className='font-bold text-lg w-full mb-4'>Select regions to EXCLUDE</h3>
          <form action="/action_page.php">
            {northRegions.map(region => {
              return (
                <div key={region.id}>
                  <input onClick={clickHandler} type="checkbox" id={region.region} name={region.region} value={region.region}></input>
                  <label htmlFor={region.region}>{region.region}</label>
                </div>
              )
            })}
            {southRegions.map(region => {
              return (
                <div key={region.id}>
                  <input onClick={clickHandler} type="checkbox" id={region.region} name={region.region} value={region.region}></input>
                  <label htmlFor={region.region}>{region.region}</label>
                  <br/>
                </div>
              )
            })}
          </form>
        </div>
        <div className='mt-16 self-center'>
          <input onClick={clickHandler} type="checkbox" id="available" name="available" value="available"/>
          <label htmlFor="available">Available Houses Only</label><br/><br/>
        </div>
        <div className='flex justify-end'>
          <button
            className='absolute top-16 right-16 shadow-lg space-x-2 md:py-3 md:text-base w- md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out'onClick={submitHandler}>
            SEARCH
          </button>
        </div>
      </div>

      {searchResults &&
        <>
          <h2>HOUSES MATCHING YOUR CRITERIA</h2>
          {searchResults.map(house => {
            return (
              <div key={house.id}>
                <Link to={`/house/${house.name}`}><p>{house.name}</p></Link>
              </div>
            )
          })}
        </>
      }
    </>
  )
}
