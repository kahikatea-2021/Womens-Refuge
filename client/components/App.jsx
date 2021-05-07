import React from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import NorthIsland from './NorthIsland'
import SouthIsland from './SouthIsland'
import AllSafehouses from './AllSafehouses'

function App () {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <Header />
      {!isAuthenticated && <Login />}
      <Route exact path='/' component={Home} />
      <Route path='/northisland' component={NorthIsland} />
      <Route path='/southisland' component={SouthIsland} />
      <Route path='/houses' component={AllSafehouses} />
      <Footer />
    </>
  )
}

export default App
