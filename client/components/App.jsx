import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import NorthIsland from './NorthIsland'
import SouthIsland from './SouthIsland'
import AllSafehouses from './AllSafehouses'
import Region from './Region'
import House from './House'
import ManageHouse from './ManageHouse'
import AddHouseForm from './Forms/AddHouseForm'

// import AddRoomForm from './Forms/AddRoomForm'

function App () {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header />
      {!isAuthenticated && <Login />}
      <Route exact path='/' component={Home} />
      <Route path='/northisland' component={NorthIsland} />
      <Route path='/southisland' component={SouthIsland} />
      <Route exact path='/houses' component={AllSafehouses} />
      <Route path='/houses/add' component={AddHouseForm} />
      <Route path='/region/:name' component={Region} />
      <Route exact path='/house/:name' component={House} />
      <Route path='/house/manage/:id' component={ManageHouse} />
      <Footer />

    </>
  )
}

export default App
