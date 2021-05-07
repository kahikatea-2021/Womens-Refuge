import React from 'react'
import LogoutButton from './Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

function Header () {
  const { logout, isLoading, isAuthenticated, user } = useAuth0()

  if (isAuthenticated) {
    return (
      <>
        <h1>Womens Refuge</h1>
      </>
    )
  } else {
<<<<<<< HEAD
    return <h1>Womens Refuge</h1>
=======
    return (
      <h1>Womens Refuge</h1>
    )
>>>>>>> 33e1c028ec4d448f506c45a3c2127383ef9e57eb
  }
}

export default Header
