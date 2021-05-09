import React, { useEffect, useState } from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { getUser } from '../apis/users'
import { setUser, deleteUser } from '../actions/user'
import { useDispatch, useSelector } from 'react-redux'

function Home () {
  const { isLoading, isAuthenticated, user } = useAuth0()
  // const [ourUser, setOurUser] = useState(null)

  const ourUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  if (isLoading) {
    return <img src="../../images/loading.gif"></img>
  }

  if (isAuthenticated && !ourUser) {
    getUser(user.sub)
      .then(res => {
        dispatch(setUser(res))
        return null
      })
      .catch(err => console.log(err))
  } else if (!isAuthenticated && ourUser) {
    dispatch(deleteUser())
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <h1>Safehouse Search Options:</h1>
          {ourUser?.house_id &&
            <Link to={`/house/manage/${ourUser.house_id}`}>MANAGE MY HOUSE</Link>
          }
          <NorthIslandButton />
          <SouthIslandButton />
          <ViewAllButton />
        </div>}
    </>
  )
}

export default Home
