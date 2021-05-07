import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'

// STRETCH GOAL: have a 'advanced search' button at the bottom of the button list which takes you to an advanced search page

function Home () {
  return (
    <>
      <h1>Safehouse Search Options:</h1>
      <NorthIslandButton />
      <SouthIslandButton />
      <ViewAllButton />
    </>
  )
}

export default Home
