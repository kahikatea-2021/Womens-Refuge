import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className="py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs w-16 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton
