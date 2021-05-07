import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Region from './Region'

function SouthIsland () {
  return (
    <>
      <Header />
      <h1>South Island Regions:</h1>
      <Region />
      <Footer />
    </>
  )
}

// We will use .map() method to map over the regions once database has been established

export default SouthIsland
