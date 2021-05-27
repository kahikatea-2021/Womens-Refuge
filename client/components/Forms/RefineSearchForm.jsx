import React, { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { getAllIslandRegions } from '../../apis/islands'
import { useAuth0 } from '@auth0/auth0-react'
import stringMaker from './refineSearchFormHelper'
import getHousesFromSearch from '../../apis/houses'
import { useHistory } from 'react-router-dom'
import formatter from '../formatter'

export default function RefineSearchForm () {
  const history = useHistory()
  const { isAuthenticated } = useAuth0()
  const [include, setExclude] = useState(false)
  const [northRegions, setNorthRegions] = useState([])
  const [southRegions, setSouthRegions] = useState([])
  const [houses, sethouses] = useState([])
  const [scrolled, setScrolled] = useState(false)
  const [queryObject, setQueryObject] = useState({
    north: false,
    south: false,
    Northland: false,
    Auckland: false,
    'Bay of Plenty': false,
    Waikato: false,
    Gisborne: false,
    Taranaki: false,
    'Hawke\'s Bay': false,
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
    const { checked, name } = e.target
    setQueryObject({ ...queryObject, [name]: checked })
    if (name === 'north' && !checked) {
      const tempObject = { north: false }
      northRegions.forEach(regName => {
        tempObject[regName.region] = false
      })
      setQueryObject({ ...queryObject, ...tempObject })
    }

    if (name === 'south' && !checked) {
      const tempObject = { south: false }
      southRegions.forEach(regName => {
        tempObject[regName.region] = false
      })
      setQueryObject({ ...queryObject, ...tempObject })
    }
  }

  function handleIncludeClick (evt) {
    setExclude(evt.target.checked)
  }

  // const formRef = useRef()

  // function formScroll () {
  //   formRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  function submitHandler () {
    getHousesFromSearch(stringMaker(queryObject, include))
      .then(result => {
        sethouses(formatter(result))
        setScrolled(true)
        return null
      })
      .catch(err => console.log(err))
  }

  // let expanded = true

  // function showCheckboxes () {
  //   if (!expanded) {
  //     expanded = true
  //   } else {
  //     expanded = false
  //   }
  // }

  function Capitalise (string) {
    const stringArr = string.toLowerCase().split('')
    stringArr[0] = stringArr[0].toUpperCase()
    return stringArr.join('')
  }

  if (scrolled && houses.length > 0) {
    document.getElementById('search-results').scrollIntoView({ behavior: 'smooth', block: 'start' })
    setScrolled(false)
  }

  return (
    <>
      <div className='bg-purple-200 flex flex-col md:flex-row justify-center self-center shadow-lg rounded-xl w-11/12 md:w-2/3 md:space-x-8 relative px-8'>
        <div className='w-full md:w-2/5 my-6 justify-start'>
          <h2 className='font-bold text-lg text-center w-full mb-6'>Select at least one</h2>
          <form action="/action_page.php">
            <div className='space-x-2'>
              <input onClick={handleClickNorth} type="checkbox" id="north" name="north" value="north" />
              <label htmlFor="north"> North Island </label>
            </div>
            <div className='space-x-2'>
              <input onClick={handleClickSouth} type="checkbox" id="south" name="south" value="south" />
              <label htmlFor="south"> South Island </label>
            </div>
            <br /><br />
            <div className='space-x-2'>
              <input onClick={clickHandler} type="checkbox" id="available" name="available" value="available" />
              <label htmlFor="available">Available Only</label>
            </div>
            <div className='space-x-2'>
              <input onChange={handleIncludeClick} checked={include} type="checkbox" id="available" name="available" value="available" />
              <label htmlFor="available">Include</label>
            </div>
          </form>
        </div>

        <div className='w-full md:w-3/5 my-6 justify-center'>
          {(northRegions.length !== 0 || southRegions.length !== 0) && <h3 className='text-center font-bold text-lg w-full'>Select regions to <u>{!include ? 'Exclude' : 'Include'}</u></h3>}
          <div className={'font-bold text-lg w-full ' + (northRegions.length !== 0 && southRegions.length !== 0) ? 'invisible' : ''}>Select regions to <u>{!include ? 'Exclude' : 'Include'}</u></div>
          <form action="/action_page.php">
            {northRegions.map(region => {
              return (
                <>
                  <div className='space-x-2' key={region.region}>
                    <input onClick={clickHandler} type="checkbox" id={region.region} name={region.region} value={region.region}></input>
                    <label htmlFor={region.region}>{region.region}</label>
                  </div>
                </>
              )
            })}
            {southRegions.map(region => {
              return (
                <div className='space-x-2' key={region.region}>
                  <input onClick={clickHandler} type="checkbox" id={region.region} name={region.region} value={region.region}></input>
                  <label htmlFor={region.region}>{region.region}</label>
                  <br />
                </div>
              )
            })}
          </form>
        </div>
        <div className='w-full md:w-1/5 flex justify-end h-32'>
          {/* <ScrollIntoView selector="#results"
            className='shadow-lg space-x-2 md:py-3 md:text-base text-center w-16 md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' onClick={submitHandler}>
            SEARCH
          </ScrollIntoView> */}
          <div
            className='shadow-lg space-x-2 md:py-3 md:text-base text-center w-16 md:w-24 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out' onClick={submitHandler}>
            SEARCH
          </div>
        </div>
      </div>

      {houses &&
        <>
          {(houses.length !== 0) && <div id='results' className=' flex justify-center font-extrabold text-center text-xl md:text-3xl my-10 md:pt-16'>
            <div className="flex flex-col">
              <h1>Houses Matching your Criteria</h1>
              <div className='flex md:flex-row justify-center text-sm md:text-base mt-2 space-x-3'>
                <div className='flex items-center md:mx-5 mb-1'>
                  <img src="/images/tickGreen.png" className="w-4 md:w-8 mr-1 md:mr-2" alt="" /><p>Available</p>
                </div>
                <div className='flex items-center md:mx-5 mb-1'>
                  <img src="/images/crossRed.png" className="w-4 md:w-8 mr-1 md:mr-2" alt="" /><p>Unavailable</p>
                </div>
              </div>
            </div>
          </div>}

          {/* <div className={'font-bold text-lg w-full ' + (northRegions.length !== 0 && southRegions.length !== 0) ? 'invisible' : ''}>Select regions to EXCLUDE</div> */}
          <div id="search-results" className>
            {/* {houses.map(house => {
              return (
                <div className='flex justify-center' key={house.name}>
                  <button onClick={() => { history.push(`/house/${house.name}`) }} className="px-5 flex justify-between items-center text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                    <p className="w-8"></p>{house.name} <img src={house.available_rooms > 0 ? '/images/tickWhite.png' : '/images/crossWhite.png'} className="w-6 md:w-8" alt="" />
                  </button>
                </div>
              )
            })} */}
            {houses.map(island => {
              return (
                <div className='flex flex-col justify-center w-full' key={island.island}>
                  <p className="mt-16 p-8 pb-0 text-center font-extrabold text-3xl">{island.regions.length > 0 && Capitalise(island.island) + ' Island'}</p>
                  {island.regions.map(region => {
                    return (
                      <div key={region.name + 'info'}>
                        <p className="pb-4 mt-12 text-center font-bold text-2xl">{region.name}</p>
                        {region.houses.map(house => {
                          return (
                            <div key={house.name + 'info'} className=' flex justify-center '>
                              <button onClick={() => { history.push(`/house/${house.name}`) }} className="px-5 flex justify-between items-center text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                                <p className="w-8"></p>{house.name} <img src={house.available_rooms > 0 ? '/images/tickWhite.png' : '/images/crossWhite.png'} className="w-6 md:w-8" alt="" />
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>)
            })}
          </div>

        </>
      }
    </>
  )
}
