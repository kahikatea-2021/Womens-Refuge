import React from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Home from './Home'
import Header from './Header'
// import Footer from './Footer'
import NorthIsland from './NorthIsland'
import SouthIsland from './SouthIsland'
import AllSafehouses from './AllSafehouses'
import Region from './Region'
import House from './House'
// import ManageHouse from './ManageHouse'
import AddHouseForm from './Forms/AddHouseForm'
import AddRoomForm from './Forms/AddRoomForm'

function App () {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className='container px-8 py-6'>
        <Header />
        {!isAuthenticated && <Login />}
        <Route exact path='/' component={Home} />
        <Route path='/northisland' component={NorthIsland} />
        <Route path='/southisland' component={SouthIsland} />
        <Route exact path='/houses' component={AllSafehouses} />
        <Route path='/houses/add' component={AddHouseForm} />
        <Route path='/region/:name' component={Region} />
        <Route path='/house/:name' component={House} />
        {/* <Footer /> */}
        {/* <ManageHouse houseId={32} /> */}
      </div>
    </>
  )
}

export default App
