import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home () {
  const { isLoading, isAuthenticated } = useAuth0()

  const ourUser = useSelector(state => state.user)

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <div>
          <h1>Safehouse Search Options:</h1>
          {ourUser?.house_id
            ? <Link to={`/house/manage/${ourUser.house_id}`}>MANAGE MY HOUSE</Link>
            : null
          }
          {ourUser?.isMasterAdmin
            ? <Link to='/houses/add'>Add New House</Link>
            : null
          }
          <NorthIslandButton />
          <SouthIslandButton />
          <ViewAllButton />
          </div>
        </div>}
    </>
  )
}

export default Home
