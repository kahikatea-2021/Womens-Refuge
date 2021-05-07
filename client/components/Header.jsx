import React from 'react'
import LogoutButton from './Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

function Header () {
  const { logout, isLoading, isAuthenticated, user } = useAuth0()

  if (isAuthenticated) {
    return (
      <>
        <LogoutButton />
        <h1>Womens Refuge</h1>
      </>
    )
  } else {
    return (
      <h1>Womens Refuge</h1>
    )
  }
}

export default Header
