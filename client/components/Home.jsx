import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import Header from './Header'
import Footer from './Footer'

// STRETCH GOAL: have a 'advanced search' button at the bottom of the button list which takes you to an advanced search page

function Home () {
  return (
    <>
      <Header />
      <h1>Safehouse Search Options:</h1>
      <NorthIslandButton />
      <SouthIslandButton />
      <ViewAllButton />
      <Footer />
    </>
  )
}

export default Home
