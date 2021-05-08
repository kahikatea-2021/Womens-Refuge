import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button className="py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs w-16 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

export default LogoutButton
