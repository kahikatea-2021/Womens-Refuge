import React from 'react'
import { Route } from 'react-router-dom'
// import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SouthIsland from './SouthIsland'
import NorthIsland from './NorthIsland'

function App () {
  const { isAuthenticated } = useAuth0()

  // if (!isAuthenticated) {
  return (
    <>
      <Header />
      {!isAuthenticated && <Login />}
      <Route exact path='/' component={Home} />
      <Route path='./northisland' component={NorthIsland} />
      <Route path='/southisland' component={SouthIsland} />
      <Footer />
    </>
  )
  // } else {
  //   return (
  //     <>
  //       <Header />
  //       <Home />
  //       <Footer />

  //     </>
  //   )
  // }
  // <Route exact path='/southisland' component={SouthIsland}></Route>
}

export default App
