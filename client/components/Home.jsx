import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import { useAuth0 } from '@auth0/auth0-react'

// STRETCH GOAL: have a 'advanced search' button at the bottom of the button list which takes you to an advanced search page

function Home () {
  const { isLoading, isAuthenticated } = useAuth0()
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {isAuthenticated && <div><h1>Safehouse Search Options:</h1>
        <NorthIslandButton />
        <SouthIslandButton />
        <ViewAllButton /></div>}
    </>
  )
}

export default Home
