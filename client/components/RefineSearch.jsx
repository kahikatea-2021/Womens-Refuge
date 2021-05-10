import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function RefineSearch () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated } = useAuth0()

  const user = useSelector(state => state.user)

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

  return (
    <>
      <h1 className=' flex justify-center font-extrabold text-2xl my-8 mt-20'>Refine Search:</h1>

    </>
  )
  // }
}

export default RefineSearch
