import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import { useAuth0 } from '@auth0/auth0-react'

function Home () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <img src="/images/loading.gif"></img>
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <h1>Safehouse Search Options:</h1>
          <NorthIslandButton />
          <SouthIslandButton />
        </div>}
    </>
  )
}

export default Home
