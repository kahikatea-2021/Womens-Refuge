import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout, isLoading, user } = useAuth0()
  // console.log('user', user.Object)
  if (isLoading) {
    // do nothing
  } else {
    console.log(user)
  }

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

export default LogoutButton
