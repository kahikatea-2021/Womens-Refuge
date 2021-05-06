import React from 'react'
import Header from './Header'
import Footer from './Footer'

function NorthIsland() {
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
