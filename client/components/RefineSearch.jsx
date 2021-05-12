import React, { useEffect, useState } from 'react'
import { getAllIslandRegions } from '../apis/islands'
import { useAuth0 } from '@auth0/auth0-react'
import RefineSearchForm from './Forms/RefineSearchForm'

function RefineSearch () {
  const [regions, setRegions] = useState([])
  const { isLoading, isAuthenticated } = useAuth0()

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

  if (!isAuthenticated) {
    return <p>Unauthorised access</p>
  }

  return (
    <>
      <div className=' flex justify-center font-extrabold text-xl md:text-3xl my-10 md:mt-12 space-x-2'>
        <h1>Advanced Search</h1>
        <img className='w-6 h-6 md:w-8 md:h-8' src='/images/searchIconBlack.png' />
      </div>
      <RefineSearchForm />

    </>
  )
  // }
}

export default RefineSearch
