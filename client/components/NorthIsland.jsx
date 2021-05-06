import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Region from './Region'

function NorthIsland () {
  return (
    <>
      <Header />
      <h1>North Island Regions:</h1>
      <Region />
      <Footer />
    </>
  )
}

// We will use .map() method to map over the regions once database has been established

export default NorthIsland
