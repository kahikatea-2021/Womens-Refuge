import React from 'react'
// import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'

function App () {
  const { logout, isLoading, isAuthenticated, user } = useAuth0()

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header />
        <Home />
        <Footer />

      </>
    )
  }
}

export default App
