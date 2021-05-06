import React from 'react'
import Header from './Header'
import Footer from './Footer'

function House () {
  return (
    <>
    <Header />
    <h1>{housename}</h1>
    <p>{region}</p>
    <p>{rooms}</p>
    <p>{availablebeds}</p>
    <p>{comments}</p>
    <p>{contactdetails}</p>
    <Footer />
    </>
  )
}

export default House
