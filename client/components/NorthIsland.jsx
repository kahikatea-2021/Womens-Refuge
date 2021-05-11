import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

function NorthIsland () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated } = useAuth0()
  const user = useSelector(state => state.user)
  const history = useHistory()

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

  function handleClick(path){
    history.push(path)
  }
  return (
    <>
      <h1 className=' flex justify-center font-extrabold text-2xl my-8 mt-8'>North Island Regions</h1>
      {regions.map(region => {
        return <div key={region.region} className=' flex justify-center '>
          {/* <Link className=' flex justify-center ' to={`/region/${region.region}`}> */}
            <button onClick={()=>{handleClick(`/region/${region.region}`)}} className="text-center m-2 py-4 w-2/3 md:w-1/3 self-center bg-poroporo hover:bg-poroporo text-white text-lg rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
              {region.region}
            </button>
          {/* </Link> */}
        </div>
      })}

    </>
  )
  // }
}

export default NorthIsland
