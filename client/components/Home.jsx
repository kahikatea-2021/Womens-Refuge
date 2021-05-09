import React, { useEffect, useState } from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { getUser } from '../apis/users'

function Home () {
  const { isLoading, isAuthenticated, user } = useAuth0()
  const [ourUser, setOurUser] = useState(null)
  useEffect(() => {
    if (!isLoading && ourUser === null && isAuthenticated) {
      getUser(user.sub) // function name is an estimate
        .then(results => {
          setOurUser(results)
          return null
        })
        .catch(err => console.log(err))
    }
  })
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    console.log('user', user)
    console.log('ourUser', ourUser)
    // getUser(user.sub) // function name is an estimate
    //   .then(results => {
    //     setOurUser(results)
    //     return null
    //   })
    //   .catch(err => console.log(err))
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
