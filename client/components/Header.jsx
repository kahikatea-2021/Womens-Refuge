import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Buttons/LogoutButton'

function Header () {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isAuthenticated) {
    return (
      <>
        <LogoutButton />
        <h1>Safehouse</h1>
        <img src="../../images/logo.png" width='200px'></img>

      </>
    )
  } else {
    return (
      <>
        <h1>Safehouse</h1>
        <img src="../../images/logo.png" width='200px'></img>
      </>
    )
  }
}

export default Header
